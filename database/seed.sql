-- =====================================================================
-- احجز تأشيرتك — بيانات ابتدائية (Seed)
-- شغّل هذا الملف بعد schema.sql و policies.sql (اختياري لكن موصى به)
-- يطابق البيانات الموجودة حاليًا في lib/data/countries.ts حتى تتمكن لاحقًا
-- من نقل مصدر بيانات الواجهة الأمامية من الملف المحلي إلى Supabase مباشرة.
-- =====================================================================

insert into public.visa_countries
  (slug, region, name_ar, name_en, flag_emoji, short_description_ar, application_center_ar,
   official_source_label, official_source_url, official_booking_url, processing_time_ar,
   government_fee_min, government_fee_max)
values
  ('france', 'schengen', 'فرنسا', 'France', '🇫🇷', 'دليلك الكامل للتقديم على تأشيرة فرنسا ضمن منطقة شنغن.', 'مركز TLScontact لتأشيرات فرنسا في الرياض وجدة', 'France-Visas — الموقع الرسمي', 'https://france-visas.gouv.fr', 'https://france-visas.gouv.fr', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('italy', 'schengen', 'إيطاليا', 'Italy', '🇮🇹', 'دليلك الكامل للتقديم على تأشيرة إيطاليا ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات إيطاليا في الرياض وجدة', 'VFS Global — إيطاليا', 'https://vfsglobal.com/italy/saudiarabia', 'https://vfsglobal.com/italy/saudiarabia', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('spain', 'schengen', 'إسبانيا', 'Spain', '🇪🇸', 'دليلك الكامل للتقديم على تأشيرة إسبانيا ضمن منطقة شنغن.', 'مركز BLS International لتأشيرات إسبانيا في الرياض وجدة', 'BLS International — إسبانيا', 'https://blsspainvisa.com/saudiarabia', 'https://blsspainvisa.com/saudiarabia', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('germany', 'schengen', 'ألمانيا', 'Germany', '🇩🇪', 'دليلك الكامل للتقديم على تأشيرة ألمانيا ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات ألمانيا في الرياض وجدة', 'السفارة الألمانية — الموقع الرسمي', 'https://saudiarabia.diplo.de', 'https://saudiarabia.diplo.de', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('greece', 'schengen', 'اليونان', 'Greece', '🇬🇷', 'دليلك الكامل للتقديم على تأشيرة اليونان ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات اليونان في الرياض وجدة', 'وزارة الخارجية اليونانية', 'https://www.mfa.gr', 'https://www.mfa.gr', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('austria', 'schengen', 'النمسا', 'Austria', '🇦🇹', 'دليلك الكامل للتقديم على تأشيرة النمسا ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات النمسا في الرياض', 'وزارة الخارجية النمساوية', 'https://www.bmeia.gv.at', 'https://www.bmeia.gv.at', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('switzerland', 'schengen', 'سويسرا', 'Switzerland', '🇨🇭', 'دليلك الكامل للتقديم على تأشيرة سويسرا ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات سويسرا في الرياض وجدة', 'مكتب الهجرة الفيدرالي السويسري', 'https://www.sem.admin.ch', 'https://www.sem.admin.ch', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('netherlands', 'schengen', 'هولندا', 'Netherlands', '🇳🇱', 'دليلك الكامل للتقديم على تأشيرة هولندا ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات هولندا في الرياض', 'الحكومة الهولندية — الموقع الرسمي', 'https://www.netherlandsandyou.nl', 'https://www.netherlandsandyou.nl', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('belgium', 'schengen', 'بلجيكا', 'Belgium', '🇧🇪', 'دليلك الكامل للتقديم على تأشيرة بلجيكا ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات بلجيكا في الرياض', 'وزارة الخارجية البلجيكية', 'https://diplomatie.belgium.be', 'https://diplomatie.belgium.be', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('portugal', 'schengen', 'البرتغال', 'Portugal', '🇵🇹', 'دليلك الكامل للتقديم على تأشيرة البرتغال ضمن منطقة شنغن.', 'مركز VFS Global لتأشيرات البرتغال في الرياض', 'البوابة الرسمية للتأشيرات البرتغالية', 'https://vistos.mne.gov.pt', 'https://vistos.mne.gov.pt', '10 - 15 يوم عمل (تقديري)', 340, 380),
  ('uk', 'uk', 'بريطانيا', 'United Kingdom', '🇬🇧', 'دليلك لتأشيرة بريطانيا بأنواعها من السياحة إلى الدراسة.', 'مركز TLScontact لتأشيرات بريطانيا في الرياض وجدة', 'UK Visas and Immigration (UKVI)', 'https://www.gov.uk/browse/visas-immigration', 'https://www.tlscontact.com/sa2gb', '15 - 20 يوم عمل (تقديري)', 500, 750),
  ('usa', 'usa', 'الولايات المتحدة', 'United States', '🇺🇸', 'نساعدك في تجهيز نموذج DS-160 والمستندات ومتابعة ملف موعد السفارة الأمريكية.', 'السفارة الأمريكية بالرياض أو القنصلية بجدة', 'U.S. Embassy & Consulates in Saudi Arabia', 'https://sa.usembassy.gov', 'https://ais.usvisa-info.com/en-sa/niv', 'يعتمد على توفر مواعيد المقابلة', 650, 650),
  ('australia', 'australia', 'أستراليا', 'Australia', '🇦🇺', 'دليل التقديم على تأشيرات أستراليا عبر النظام الإلكتروني الرسمي ImmiAccount.', 'التقديم إلكترونيًا بالكامل عبر ImmiAccount', 'Department of Home Affairs — Australia', 'https://immi.homeaffairs.gov.au', 'https://online.immi.gov.au', '20 - 30 يوم عمل (تقديري)', 450, 900),
  ('canada', 'canada', 'كندا', 'Canada', '🇨🇦', 'نرافقك في تجهيز طلب تأشيرة كندا عبر النظام الإلكتروني الرسمي IRCC.', 'مركز VFS Global لتأشيرات كندا في الرياض وجدة', 'Immigration, Refugees and Citizenship Canada (IRCC)', 'https://www.canada.ca/en/immigration-refugees-citizenship.html', 'https://www.vfsglobal.ca/canada/saudiarabia', '20 - 45 يوم عمل (تقديري)', 400, 850)
on conflict (slug) do nothing;

-- أنواع التأشيرات الأساسية لكل دولة شنغن (نفس النمط لجميع دول شنغن)
insert into public.visa_types (country_id, slug, name_ar, name_en, description_ar, service_fee_min, service_fee_max)
select c.id, v.slug, v.name_ar, v.name_en, v.description_ar, 250, 450
from public.visa_countries c
cross join (values
  ('tourism', 'سياحية', 'Tourism', 'للزيارات السياحية القصيرة حتى 90 يومًا.'),
  ('family-visit', 'زيارة عائلية', 'Family Visit', 'لزيارة أقارب أو عائلة مقيمة في الدولة.'),
  ('business', 'أعمال', 'Business', 'لاجتماعات العمل والمعارض التجارية.'),
  ('transit', 'ترانزيت', 'Transit', 'للعبور عبر مطارات منطقة شنغن.')
) as v(slug, name_ar, name_en, description_ar)
where c.region = 'schengen'
on conflict (country_id, slug) do nothing;

-- أسعار الخدمات المعروضة في صفحة "خدماتنا"
insert into public.prices (service_key, title_ar, description_ar, from_price) values
  ('form-filling', 'تعبئة نموذج التأشيرة', 'مساعدتك في تجهيز وتعبئة نموذج طلب التأشيرة الرسمي بدقة وسهولة.', 150),
  ('document-review', 'مراجعة المستندات', 'فحص أولي لمستنداتك للتأكد من اكتمالها ووضوحها قبل التقديم.', 100),
  ('full-preparation', 'تجهيز طلب التأشيرة كاملاً', 'خدمة شاملة من رفع المستندات وحتى تجهيز الملف للتقديم الرسمي.', 350),
  ('appointment-service', 'خدمة حجز الموعد', 'مساعدتك في تجهيز بيانات حجز الموعد وتوجيهك للمنصة الرسمية.', 120),
  ('family-request', 'طلب عائلي', 'سعر خاص لتقديم طلبات عائلية متعددة ضمن ملف واحد.', 0)
on conflict (service_key) do nothing;
