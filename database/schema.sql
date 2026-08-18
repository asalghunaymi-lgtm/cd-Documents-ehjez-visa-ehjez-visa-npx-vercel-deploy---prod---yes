-- =====================================================================
-- احجز تأشيرتك (Ehjez Visa) — Database Schema
-- Target: Supabase (PostgreSQL)
-- ---------------------------------------------------------------------
-- كيفية الاستخدام:
--   1) أنشئ مشروع Supabase جديد (أو استخدم مشروعك الحالي).
--   2) شغّل هذا الملف عبر SQL Editor في لوحة تحكم Supabase، أو عبر
--      supabase db push إذا كنت تستخدم Supabase CLI.
--   3) بعده شغّل database/policies.sql لتفعيل Row Level Security.
--   4) اختياريًا شغّل database/seed.sql لتعبئة بيانات ابتدائية للدول.
-- =====================================================================

create extension if not exists "uuid-ossp";
create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------
-- ENUM TYPES
-- ---------------------------------------------------------------------
do $$ begin
  create type user_role as enum ('customer', 'employee', 'admin');
exception when duplicate_object then null; end $$;

do $$ begin
  create type application_status as enum (
    'new',
    'awaiting_documents',
    'under_review',
    'documents_missing',
    'preparing_form',
    'awaiting_customer',
    'ready_for_appointment',
    'appointment_booked',
    'submitted',
    'awaiting_decision',
    'approved',
    'rejected',
    'closed'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type document_status as enum ('missing', 'uploaded', 'needs_review', 'approved', 'rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type payment_status as enum ('pending', 'paid', 'failed', 'refunded');
exception when duplicate_object then null; end $$;

do $$ begin
  create type family_relation as enum ('self', 'spouse', 'son', 'daughter', 'other');
exception when duplicate_object then null; end $$;

do $$ begin
  create type notification_channel as enum ('email', 'sms', 'whatsapp', 'in_app');
exception when duplicate_object then null; end $$;

-- ---------------------------------------------------------------------
-- users — طبقة موحّدة فوق auth.users لتخزين الدور والبيانات المشتركة
-- ---------------------------------------------------------------------
create table if not exists public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  role user_role not null default 'customer',
  full_name text,
  phone text,
  email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- customers — بيانات إضافية خاصة بالعميل
-- ---------------------------------------------------------------------
create table if not exists public.customers (
  id uuid primary key references public.users (id) on delete cascade,
  national_id text,
  city text,
  address text,
  preferred_language text default 'ar',
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- employees / admin_users — فريق العمل الداخلي
-- ---------------------------------------------------------------------
create table if not exists public.employees (
  id uuid primary key references public.users (id) on delete cascade,
  job_title text,
  department text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id uuid primary key references public.users (id) on delete cascade,
  permissions jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- visa_countries — الدول المدعومة (قابلة للإدارة من لوحة التحكم)
-- ---------------------------------------------------------------------
create table if not exists public.visa_countries (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  region text not null, -- schengen | uk | usa | australia | canada | ...
  name_ar text not null,
  name_en text not null,
  flag_emoji text,
  short_description_ar text,
  application_center_ar text,
  official_source_label text,
  official_source_url text,
  official_booking_url text,
  processing_time_ar text,
  government_fee_min numeric(10,2),
  government_fee_max numeric(10,2),
  is_active boolean not null default true,
  last_updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- visa_types — أنواع التأشيرات لكل دولة
-- ---------------------------------------------------------------------
create table if not exists public.visa_types (
  id uuid primary key default gen_random_uuid(),
  country_id uuid not null references public.visa_countries (id) on delete cascade,
  slug text not null,
  name_ar text not null,
  name_en text,
  description_ar text,
  service_fee_min numeric(10,2),
  service_fee_max numeric(10,2),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (country_id, slug)
);

-- ---------------------------------------------------------------------
-- visa_requirements — نص المتطلبات والخطوات والأسئلة الشائعة لكل تأشيرة
-- ---------------------------------------------------------------------
create table if not exists public.visa_requirements (
  id uuid primary key default gen_random_uuid(),
  visa_type_id uuid not null references public.visa_types (id) on delete cascade,
  requirement_text_ar text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- document_requirements — قائمة المستندات المطلوبة (عامة أو مرتبطة بتأشيرة)
-- ---------------------------------------------------------------------
create table if not exists public.document_requirements (
  id uuid primary key default gen_random_uuid(),
  visa_type_id uuid references public.visa_types (id) on delete cascade,
  key text not null,
  label_ar text not null,
  description_ar text,
  is_required boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- applications — الطلب (قد يكون فرديًا أو رئيسيًا لطلب عائلي)
-- ---------------------------------------------------------------------
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  reference_number text not null unique default ('EV-' || to_char(now(), 'YYYY') || '-' || lpad(floor(random() * 999999)::text, 6, '0')),
  customer_id uuid not null references public.customers (id) on delete cascade,
  country_id uuid not null references public.visa_countries (id),
  visa_type_id uuid not null references public.visa_types (id),
  status application_status not null default 'new',
  assigned_employee_id uuid references public.employees (id),
  is_family_application boolean not null default false,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_applications_customer on public.applications (customer_id);
create index if not exists idx_applications_status on public.applications (status);

-- ---------------------------------------------------------------------
-- applicants — كل مسافر ضمن الطلب (المتقدم الرئيسي + أفراد العائلة)
-- ---------------------------------------------------------------------
create table if not exists public.applicants (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications (id) on delete cascade,
  relation family_relation not null default 'self',
  full_name_ar text not null,
  full_name_en text not null,
  birth_date date,
  birth_place text,
  nationality text,
  passport_number text,
  passport_issue_date date,
  passport_expiry_date date,
  gender text,
  marital_status text,
  phone text,
  email text,
  address text,
  city text,
  occupation text,
  employer text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_applicants_application on public.applicants (application_id);

-- ---------------------------------------------------------------------
-- documents — الملفات المرفوعة لكل مسافر (تُخزَّن فعليًا في Supabase Storage)
-- ---------------------------------------------------------------------
create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  applicant_id uuid not null references public.applicants (id) on delete cascade,
  document_requirement_key text not null,
  storage_path text not null, -- المسار داخل Supabase Storage (Bucket خاص، ليس عامًا)
  file_name text not null,
  mime_type text,
  size_bytes bigint,
  status document_status not null default 'uploaded',
  employee_note text,
  reviewed_by uuid references public.employees (id),
  reviewed_at timestamptz,
  uploaded_at timestamptz not null default now()
);

create index if not exists idx_documents_applicant on public.documents (applicant_id);

-- ---------------------------------------------------------------------
-- appointments — معلومات الموعد (رابط رسمي فقط، لا حجز آلي)
-- ---------------------------------------------------------------------
create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications (id) on delete cascade,
  center_name_ar text,
  city text,
  official_booking_url text,
  known_appointment_date timestamptz, -- يُملأ فقط إذا توفر من مصدر رسمي، لا يُخترع
  booked_by_customer boolean not null default false,
  notes text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- application_status_history — سجل تتبع تغييرات حالة الطلب
-- ---------------------------------------------------------------------
create table if not exists public.application_status_history (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications (id) on delete cascade,
  old_status application_status,
  new_status application_status not null,
  changed_by uuid references public.users (id),
  note text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- payments / invoices — فصل الرسوم الحكومية عن رسوم الخدمة
-- ---------------------------------------------------------------------
create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications (id) on delete cascade,
  invoice_number text not null unique default ('INV-' || to_char(now(), 'YYYYMMDD') || '-' || lpad(floor(random() * 9999)::text, 4, '0')),
  service_fee numeric(10,2) not null default 0,
  government_fee numeric(10,2) not null default 0,
  total_amount numeric(10,2) generated always as (service_fee + government_fee) stored,
  status payment_status not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid not null references public.invoices (id) on delete cascade,
  amount numeric(10,2) not null,
  provider text, -- بوابة الدفع السعودية (مدى / Moyasar / HyperPay ... الخ)
  provider_reference text,
  status payment_status not null default 'pending',
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- notifications / messages
-- ---------------------------------------------------------------------
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  application_id uuid references public.applications (id) on delete cascade,
  channel notification_channel not null default 'in_app',
  title text not null,
  body text not null,
  is_read boolean not null default false,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications (id) on delete cascade,
  sender_id uuid not null references public.users (id),
  body text not null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- prices — أسعار الخدمات المعروضة في صفحة "خدماتنا" (قابلة للتعديل من لوحة التحكم)
-- ---------------------------------------------------------------------
create table if not exists public.prices (
  id uuid primary key default gen_random_uuid(),
  service_key text not null unique,
  title_ar text not null,
  description_ar text,
  from_price numeric(10,2) not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- audit_logs — سجل تدقيق لعمليات الدخول والتعديل الحساسة
-- ---------------------------------------------------------------------
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.users (id),
  action text not null, -- e.g. 'login', 'document.approve', 'application.status_change'
  entity_type text,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  ip_address text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- updated_at triggers
-- ---------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

do $$
declare
  t text;
begin
  foreach t in array array['users','visa_countries','applications','applicants']
  loop
    execute format('
      drop trigger if exists trg_set_updated_at on public.%I;
      create trigger trg_set_updated_at before update on public.%I
      for each row execute function public.set_updated_at();
    ', t, t);
  end loop;
end $$;
