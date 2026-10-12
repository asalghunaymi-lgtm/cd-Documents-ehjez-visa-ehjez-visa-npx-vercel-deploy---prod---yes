import type { Metadata } from "next";
import { DocumentChecklist } from "@/components/documents/document-checklist";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.documents.metaTitle, description: t.documents.metaDescription };
}

export default async function DocumentsPage() {
  const { t } = await getI18n();
  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">{t.documents.title}</h1>
          <p className="mt-2 text-[14px] text-muted-foreground">
            {t.documents.lead}
          </p>
        </div>
        <DocumentChecklist />
      </div>
    </div>
  );
}
