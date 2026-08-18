import type { Metadata } from "next";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "@fontsource/cairo/900.css";
import "./globals.css";
import { PublicChrome } from "@/components/layout/public-chrome";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.nameAr} | تأشيرتك تبدأ من هنا`,
    template: `%s | ${siteConfig.nameAr}`,
  },
  description: siteConfig.descriptionAr,
  keywords: [
    "تأشيرة شنغن من السعودية",
    "تأشيرة بريطانيا من السعودية",
    "تأشيرة أمريكا من السعودية",
    "تأشيرة كندا من السعودية",
    "تأشيرة أستراليا من السعودية",
    "احجز تأشيرتك",
    "طلب تأشيرة اونلاين السعودية",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.nameAr,
    siteName: siteConfig.nameAr,
    description: siteConfig.descriptionAr,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.nameAr,
    description: siteConfig.descriptionAr,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
