import type { Metadata } from "next";
import { AppointmentFinder } from "@/components/appointments/appointment-finder";

export const metadata: Metadata = {
  title: "حجز موعد",
  description: "تعرف على مركز التقديم المعتمد لدولتك وانتقل مباشرة إلى منصة الحجز الرسمية.",
};

export default async function AppointmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">حجز موعد</h1>
          <p className="mt-2 text-[14px] text-muted-foreground">
            نعرض لك مركز التقديم المعتمد ورابط الحجز الرسمي مباشرة — نحن لا نخترع مواعيد أو نتجاوز أنظمة الحجز
            الرسمية.
          </p>
        </div>
        <AppointmentFinder initialCountry={params.country} />
      </div>
    </div>
  );
}
