import type { Metadata } from "next";
import { AppointmentFinder } from "@/components/appointments/appointment-finder";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.appointments.metaTitle, description: t.appointments.metaDescription };
}

export default async function AppointmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const params = await searchParams;
  const { t } = await getI18n();
  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">{t.appointments.title}</h1>
          <p className="mt-2 text-[14px] text-muted-foreground">
            {t.appointments.lead}
          </p>
        </div>
        <AppointmentFinder initialCountry={params.country} />
      </div>
    </div>
  );
}
