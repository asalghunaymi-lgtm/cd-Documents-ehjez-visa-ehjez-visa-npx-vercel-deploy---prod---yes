"use client";

import Link from "@/components/i18n/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/config/site";
import { getCountries } from "@/lib/data/countries";
import { useI18n } from "@/lib/i18n/client";

export function SiteFooter() {
  const { t, locale } = useI18n();
  const year = new Date().getFullYear();
  const topCountries = getCountries(locale).slice(0, 6);

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-app grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo dark />
          <p className="mt-4 text-sm leading-7 text-navy-300">{t.meta.description}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">{t.footer.quickLinks}</h4>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-300 hover:text-gold-400">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/appointments" className="text-navy-300 hover:text-gold-400">
                {t.footer.bookAppointment}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">{t.footer.topDestinations}</h4>
          <ul className="space-y-2.5 text-sm">
            {topCountries.map((c) => (
              <li key={c.slug}>
                <Link href={`/visa/${c.slug}`} className="text-navy-300 hover:text-gold-400">
                  {c.flagEmoji} {t.footer.visaFor(c.nameAr)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">{t.footer.contactUs}</h4>
          <ul className="space-y-3 text-sm text-navy-300">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold-400" />
              <a href={`tel:${siteConfig.supportPhone}`} className="transition-colors hover:text-gold-400" dir="ltr">
                {siteConfig.supportPhoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold-400" /> {siteConfig.supportEmail}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold-400" /> {t.footer.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-400 sm:flex-row">
          <p>{t.footer.rights(year)}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold-400">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-gold-400">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
