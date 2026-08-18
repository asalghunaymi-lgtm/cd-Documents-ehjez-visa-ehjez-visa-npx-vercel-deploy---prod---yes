import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/config/site";
import { COUNTRIES } from "@/lib/data/countries";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const topCountries = COUNTRIES.slice(0, 6);

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-app grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo dark />
          <p className="mt-4 text-sm leading-7 text-navy-300">{siteConfig.descriptionAr}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">روابط سريعة</h4>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-300 hover:text-gold-400">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/appointments" className="text-navy-300 hover:text-gold-400">
                حجز موعد
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">أشهر الوجهات</h4>
          <ul className="space-y-2.5 text-sm">
            {topCountries.map((c) => (
              <li key={c.slug}>
                <Link href={`/visa/${c.slug}`} className="text-navy-300 hover:text-gold-400">
                  {c.flagEmoji} تأشيرة {c.nameAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">تواصل معنا</h4>
          <ul className="space-y-3 text-sm text-navy-300">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold-400" /> {siteConfig.supportPhone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold-400" /> {siteConfig.supportEmail}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold-400" /> الرياض، المملكة العربية السعودية
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-400 sm:flex-row">
          <p>© {year} احجز تأشيرتك. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold-400">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-gold-400">شروط الاستخدام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
