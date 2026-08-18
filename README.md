# احجز تأشيرتك (Ehjez Visa)

منصة سعودية عربية RTL لتسهيل إجراءات التقديم على التأشيرات: اختيار الدولة ونوع التأشيرة، معرفة المتطلبات، إنشاء ملف
العميل، رفع المستندات، تعبئة بيانات طلب التأشيرة، ثم توجيه العميل إلى الموقع الرسمي أو مركز التقديم المعتمد لإكمال
الطلب وحجز الموعد، مع إمكانية متابعة حالة الخدمة.

> **إخلاء مسؤولية:** احجز تأشيرتك منصة مستقلة لتقديم خدمات المساعدة في إجراءات التأشيرات، وليست سفارة أو جهة حكومية
> ولا تضمن إصدار التأشيرة. قرار منح أو رفض التأشيرة يعود حصريًا إلى الجهة المختصة.

## حالة المشروع

هذه نسخة **MVP (الحد الأدنى القابل للتشغيل)** تغطي المراحل 1–7 من خطة التنفيذ المرحلية (الصفحة الرئيسية، اختيار
الدولة والتأشيرة، Wizard الطلب، رفع المستندات، لوحة العميل، هيكل لوحة تحكم إدارية). الواجهات جميعها تعمل فعليًا
بالكامل وتبني بنجاح (`npm run build`)، لكنها تعمل حاليًا **ببيانات محلية (mock)** داخل `lib/data/*` بدلاً من قاعدة
بيانات حقيقية، وذلك حتى يتم ربط مشروع Supabase (راجع "ربط Supabase" أدناه). Schema قاعدة البيانات الكاملة جاهزة في
`database/` بحيث يكون الربط مباشرًا دون أي إعادة هيكلة.

المراحل المتبقية (المصادقة الفعلية، الدفع، الإشعارات الفعلية عبر Email/SMS/WhatsApp، المساعد الذكي المرتبط بقاعدة
البيانات، وربط لوحة التحكم بـ Supabase فعليًا) موثقة في `docs/ROADMAP.md`.

## التقنيات المستخدمة

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + مكوّنات مبنية على نمط shadcn/ui (Radix UI + CVA)
- خط **Cairo** العربي (مستضاف ذاتيًا عبر `@fontsource/cairo` لضمان الأداء وعدم الاعتماد على شبكات خارجية)
- جاهز للربط مع **Supabase** (PostgreSQL + Auth + Storage) عبر `@supabase/ssr` و `@supabase/supabase-js`
- **Vercel** للنشر

## بنية المشروع

```
app/                 # صفحات ومسارات Next.js App Router
  visa/[country]/     # صفحة ديناميكية لكل دولة
  apply/               # Wizard طلب التأشيرة
  documents/           # رفع المستندات
  dashboard/           # لوحة العميل "ملفي"
  admin/               # لوحة التحكم الإدارية
components/
  ui/                 # مكوّنات واجهة أساسية (Button, Card, Dialog...)
  layout/ home/ wizard/ documents/ dashboard/ country/ admin/ appointments/
lib/
  data/               # بيانات محلية (دول، تأشيرات، أسعار، أسئلة شائعة...) — المصدر الحالي للواجهة
  supabase/           # عملاء Supabase لجهة المتصفح والسيرفر (جاهزة، تحتاج متغيرات بيئة)
  utils.ts, format-fee.ts
types/                # أنواع TypeScript المشتركة (تطابق مخطط قاعدة البيانات)
database/             # schema.sql + policies.sql + seed.sql لـ Supabase
config/site.ts        # إعدادات الموقع العامة (الاسم، الوصف، الروابط، إخلاء المسؤولية)
docs/                 # وثائق إضافية (ARCHITECTURE.md, ROADMAP.md)
```

## التشغيل محليًا

```bash
npm install
cp .env.example .env.local   # ثم عبّئ القيم (اختياري في هذه المرحلة، المشروع يعمل ببيانات محلية بدونها)
npm run dev
```

يفتح المشروع على `http://localhost:3000`.

للتحقق من جاهزية الإنتاج:

```bash
npm run lint
npm run build
```

## متغيرات البيئة

انظر `.env.example` للقائمة الكاملة. **لا ترفع ملف `.env.local` إلى GitHub أبدًا** (مستثنى بالفعل عبر `.gitignore`).

| المتغير | الوصف |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | رابط مشروع Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | مفتاح anon العام (آمن للمتصفح) |
| `SUPABASE_SERVICE_ROLE_KEY` | مفتاح سري — يُستخدم فقط في السيرفر (لوحة التحكم)، لا يُعرض للمتصفح أبدًا |
| `NEXT_PUBLIC_SITE_URL` | رابط الموقع المستخدم في SEO/Sitemap |

## ربط Supabase

1. أنشئ مشروعًا على [supabase.com](https://supabase.com) (أو استخدم مشروعك الحالي).
2. من **SQL Editor** شغّل الملفات بالترتيب:
   1. `database/schema.sql` — إنشاء كل الجداول (`users, customers, employees, visa_countries, visa_types,
      visa_requirements, applications, applicants, documents, document_requirements, appointments,
      application_status_history, payments, invoices, notifications, messages, admin_users, audit_logs, prices`).
   2. `database/policies.sql` — تفعيل Row Level Security بحيث لا يصل أي عميل لبيانات عميل آخر، ويرى الموظف فقط ما
      يخصه.
   3. `database/seed.sql` (اختياري) — تعبئة الدول وأنواع التأشيرات والأسعار الابتدائية.
3. من **Storage** أنشئ Bucket خاص (Private) باسم `documents`، وفعّل سياسات وصول تربط المسار بمالك الملف فقط (راجع
   التعليق في أسفل `database/policies.sql`). لا تجعل الـ Bucket عامًا (Public) إطلاقًا.
4. انسخ `Project URL` و `anon public key` و `service_role key` من **Project Settings → API** إلى `.env.local`.
5. بعد الربط، استبدل مصدر البيانات في مكوّنات الواجهة تدريجيًا من `lib/data/*.ts` إلى استعلامات عبر
   `lib/supabase/server.ts` (Server Components) أو `lib/supabase/client.ts` (Client Components) — الأنواع في
   `types/index.ts` مصممة لتطابق أعمدة الجداول مباشرة لتسهيل هذا الانتقال.

## النشر على Vercel

1. اربط مستودع GitHub بمشروع Vercel (`vercel link` أو من لوحة تحكم Vercel مباشرة).
2. أضف متغيرات البيئة نفسها (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`) في **Project Settings → Environment Variables**.
3. كل Push على الفرع الرئيسي ينشر تلقائيًا (Vercel Git Integration)، أو استخدم `vercel --prod` يدويًا.

## طريقة إضافة دولة جديدة

حاليًا (قبل ربط Supabase) يتم ذلك عبر تعديل `lib/data/countries.ts`:

```ts
schengenCountry({
  slug: "poland",
  nameAr: "بولندا",
  nameEn: "Poland",
  flagEmoji: "🇵🇱",
  gradient: "from-navy-900 to-red-800",
  applicationCenterAr: "مركز VFS Global لتأشيرات بولندا في الرياض",
  officialUrl: "https://www.gov.pl",
  officialLabel: "الحكومة البولندية — الموقع الرسمي",
})
```

بعد ربط Supabase، يتم ذلك عبر لوحة التحكم (`/admin/countries`) بإدخال بيانات في جدول `visa_countries`، أو مباشرة عبر
SQL (راجع نمط الإدخال في `database/seed.sql`).

## طريقة إضافة نوع تأشيرة

أضف عنصرًا جديدًا في مصفوفة `visaTypes` الخاصة بالدولة داخل `lib/data/countries.ts`، أو بعد الربط أضف صفًا في جدول
`visa_types` مرتبطًا بـ `country_id`.

## طريقة إضافة متطلبات ومستندات

- المتطلبات النصية: مصفوفة `requirements` لكل دولة في `lib/data/countries.ts` (أو جدول `visa_requirements` بعد
  الربط).
- المستندات المطلوبة للرفع: `lib/data/document-requirements.ts` (أو جدول `document_requirements` بعد الربط، مع
  إمكانية ربطها بنوع تأشيرة محدد عبر `visa_type_id`).

## طريقة إضافة/تعديل رابط رسمي

كل دولة تحتوي على `officialSource` (تسمية + رابط) و`officialBookingUrl` (رابط الحجز الرسمي) ضمن
`lib/data/countries.ts`. بعد الربط تُعدَّل هذه الحقول مباشرة من جدول `visa_countries` عبر لوحة التحكم.

## الأمان والخصوصية (ملخص)

- لا تُخزَّن أي مستندات أو مفاتيح داخل GitHub.
- كل بيانات الاتصال الحساسة تُقرأ من متغيرات بيئة (`.env.local`، وعلى Vercel من إعدادات المشروع).
- مخطط قاعدة البيانات مصمم مع Row Level Security بحيث لا يستطيع عميل الوصول لبيانات عميل آخر، والموظف يرى فقط ما
  يخصه (راجع `database/policies.sql`).
- التفاصيل الكاملة في `app/privacy/page.tsx` و `app/terms/page.tsx` (سياسة الخصوصية وشروط الاستخدام المعروضة في
  الموقع).

## توثيق إضافي

- `docs/ARCHITECTURE.md` — نظرة معمارية على المشروع وتدفق البيانات.
- `docs/ROADMAP.md` — المراحل المتبقية بعد MVP (مصادقة، دفع، إشعارات فعلية، مساعد ذكي).
