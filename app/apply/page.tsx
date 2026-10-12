import type { Metadata } from "next";
import { Suspense } from "react";
import { ApplyWizard } from "@/components/wizard/apply-wizard";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.apply.metaTitle, description: t.apply.metaDescription };
}

export default async function ApplyPage() {
  const { t } = await getI18n();
  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">{t.apply.title}</h1>
          <p className="mt-2 text-[14px] text-muted-foreground">
            {t.apply.lead}
          </p>
        </div>
        <Suspense>
          <ApplyWizard />
        </Suspense>
      </div>
    </div>
  );
}
