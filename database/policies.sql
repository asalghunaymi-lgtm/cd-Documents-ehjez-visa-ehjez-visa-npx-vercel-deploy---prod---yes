-- =====================================================================
-- احجز تأشيرتك — Row Level Security Policies
-- شغّل هذا الملف بعد database/schema.sql
-- =====================================================================

-- ---------------------------------------------------------------------
-- Helper: هل المستخدم الحالي موظف أو أدمن؟
-- ---------------------------------------------------------------------
create or replace function public.is_staff()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.users
    where id = auth.uid() and role in ('employee', 'admin')
  );
$$;

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from public.users
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ---------------------------------------------------------------------
-- تفعيل RLS على كل الجداول الحساسة
-- ---------------------------------------------------------------------
alter table public.users enable row level security;
alter table public.customers enable row level security;
alter table public.employees enable row level security;
alter table public.admin_users enable row level security;
alter table public.applications enable row level security;
alter table public.applicants enable row level security;
alter table public.documents enable row level security;
alter table public.appointments enable row level security;
alter table public.application_status_history enable row level security;
alter table public.invoices enable row level security;
alter table public.payments enable row level security;
alter table public.notifications enable row level security;
alter table public.messages enable row level security;
alter table public.audit_logs enable row level security;

-- الجداول المرجعية العامة (دول، تأشيرات، متطلبات، أسعار) — قراءة عامة، كتابة للأدمن فقط
alter table public.visa_countries enable row level security;
alter table public.visa_types enable row level security;
alter table public.visa_requirements enable row level security;
alter table public.document_requirements enable row level security;
alter table public.prices enable row level security;

-- ---------------------------------------------------------------------
-- users
-- ---------------------------------------------------------------------
create policy "users_select_own_or_staff" on public.users
  for select using (id = auth.uid() or public.is_staff());

create policy "users_update_own" on public.users
  for update using (id = auth.uid());

-- ---------------------------------------------------------------------
-- customers
-- ---------------------------------------------------------------------
create policy "customers_select_own_or_staff" on public.customers
  for select using (id = auth.uid() or public.is_staff());

create policy "customers_update_own" on public.customers
  for update using (id = auth.uid());

create policy "customers_insert_own" on public.customers
  for insert with check (id = auth.uid());

-- ---------------------------------------------------------------------
-- employees / admin_users — يراها الموظف نفسه أو الأدمن فقط
-- ---------------------------------------------------------------------
create policy "employees_select_self_or_admin" on public.employees
  for select using (id = auth.uid() or public.is_admin());

create policy "admin_users_select_self_or_admin" on public.admin_users
  for select using (id = auth.uid() or public.is_admin());

-- ---------------------------------------------------------------------
-- applications — العميل يرى طلباته فقط، الموظف يرى الطلبات المسندة له أو الكل حسب الصلاحية
-- ---------------------------------------------------------------------
create policy "applications_select_own_or_staff" on public.applications
  for select using (
    customer_id = auth.uid()
    or public.is_staff()
  );

create policy "applications_insert_own" on public.applications
  for insert with check (customer_id = auth.uid());

create policy "applications_update_own_or_staff" on public.applications
  for update using (customer_id = auth.uid() or public.is_staff());

-- ---------------------------------------------------------------------
-- applicants — عبر ملكية الطلب الأب
-- ---------------------------------------------------------------------
create policy "applicants_select_via_application" on public.applicants
  for select using (
    public.is_staff()
    or exists (
      select 1 from public.applications a
      where a.id = applicants.application_id and a.customer_id = auth.uid()
    )
  );

create policy "applicants_write_via_application" on public.applicants
  for all using (
    public.is_staff()
    or exists (
      select 1 from public.applications a
      where a.id = applicants.application_id and a.customer_id = auth.uid()
    )
  );

-- ---------------------------------------------------------------------
-- documents — لا يمكن لعميل الوصول لمستندات عميل آخر إطلاقًا
-- ---------------------------------------------------------------------
create policy "documents_select_owner_or_staff" on public.documents
  for select using (
    public.is_staff()
    or exists (
      select 1 from public.applicants ap
      join public.applications a on a.id = ap.application_id
      where ap.id = documents.applicant_id and a.customer_id = auth.uid()
    )
  );

create policy "documents_write_owner_or_staff" on public.documents
  for all using (
    public.is_staff()
    or exists (
      select 1 from public.applicants ap
      join public.applications a on a.id = ap.application_id
      where ap.id = documents.applicant_id and a.customer_id = auth.uid()
    )
  );

-- ---------------------------------------------------------------------
-- appointments / status history / invoices / payments — عبر ملكية الطلب
-- ---------------------------------------------------------------------
create policy "appointments_select_via_application" on public.appointments
  for select using (
    public.is_staff()
    or exists (select 1 from public.applications a where a.id = appointments.application_id and a.customer_id = auth.uid())
  );

create policy "status_history_select_via_application" on public.application_status_history
  for select using (
    public.is_staff()
    or exists (select 1 from public.applications a where a.id = application_status_history.application_id and a.customer_id = auth.uid())
  );

create policy "invoices_select_via_application" on public.invoices
  for select using (
    public.is_staff()
    or exists (select 1 from public.applications a where a.id = invoices.application_id and a.customer_id = auth.uid())
  );

create policy "payments_select_via_invoice" on public.payments
  for select using (
    public.is_staff()
    or exists (
      select 1 from public.invoices i
      join public.applications a on a.id = i.application_id
      where i.id = payments.invoice_id and a.customer_id = auth.uid()
    )
  );

-- ---------------------------------------------------------------------
-- notifications / messages
-- ---------------------------------------------------------------------
create policy "notifications_select_own" on public.notifications
  for select using (user_id = auth.uid() or public.is_staff());

create policy "messages_select_via_application" on public.messages
  for select using (
    public.is_staff()
    or exists (select 1 from public.applications a where a.id = messages.application_id and a.customer_id = auth.uid())
  );

create policy "messages_insert_via_application" on public.messages
  for insert with check (
    sender_id = auth.uid()
    and (
      public.is_staff()
      or exists (select 1 from public.applications a where a.id = messages.application_id and a.customer_id = auth.uid())
    )
  );

-- ---------------------------------------------------------------------
-- audit_logs — يقرأها الأدمن فقط
-- ---------------------------------------------------------------------
create policy "audit_logs_select_admin_only" on public.audit_logs
  for select using (public.is_admin());

-- ---------------------------------------------------------------------
-- الجداول المرجعية العامة: قراءة للجميع (بما فيهم الزوار غير المسجلين عبر anon key)
-- كتابة/تعديل للأدمن فقط
-- ---------------------------------------------------------------------
create policy "visa_countries_public_read" on public.visa_countries for select using (true);
create policy "visa_countries_admin_write" on public.visa_countries for all using (public.is_admin());

create policy "visa_types_public_read" on public.visa_types for select using (true);
create policy "visa_types_admin_write" on public.visa_types for all using (public.is_admin());

create policy "visa_requirements_public_read" on public.visa_requirements for select using (true);
create policy "visa_requirements_admin_write" on public.visa_requirements for all using (public.is_admin());

create policy "document_requirements_public_read" on public.document_requirements for select using (true);
create policy "document_requirements_admin_write" on public.document_requirements for all using (public.is_admin());

create policy "prices_public_read" on public.prices for select using (true);
create policy "prices_admin_write" on public.prices for all using (public.is_admin());

-- =====================================================================
-- Supabase Storage — ملاحظات (تُطبَّق من لوحة تحكم Storage أو عبر SQL منفصل):
--   1) أنشئ Bucket خاص (private) باسم "documents" — غير عام إطلاقًا.
--   2) فعّل RLS على storage.objects وأضف سياسات تسمح فقط بالوصول لمالك
--      الملف (بحسب مسار يتضمن applicant_id/customer_id) أو للموظفين.
--   3) استخدم Signed URLs محدودة الصلاحية عند عرض/تنزيل أي مستند من الواجهة،
--      ولا تجعل أي رابط تخزين دائمًا أو عامًا.
-- =====================================================================
