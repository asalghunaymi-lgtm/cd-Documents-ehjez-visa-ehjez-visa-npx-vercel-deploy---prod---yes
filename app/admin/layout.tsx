import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminMobileNav } from "@/components/admin/admin-mobile-nav";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.admin.metaTitle, robots: { index: false, follow: false } };
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] bg-navy-50/40">
      <AdminSidebar />
      <div className="flex-1 p-5 sm:p-8">
        <AdminMobileNav />
        {children}
      </div>
    </div>
  );
}
