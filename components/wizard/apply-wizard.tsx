"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronLeft, ChevronRight, Plus, Trash2, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { StepIndicator, type WizardStep } from "./step-indicator";
import { COUNTRIES } from "@/lib/data/countries";
import { NATIONALITIES } from "@/lib/data/nationalities";
import { FamilyMember, TravelerData } from "@/types";
import { cn } from "@/lib/utils";

const STEPS: WizardStep[] = [
  { key: "nationality", label: "الجنسية" },
  { key: "country", label: "الدولة" },
  { key: "visa-type", label: "نوع التأشيرة" },
  { key: "traveler", label: "بيانات المسافر" },
  { key: "family", label: "العائلة" },
  { key: "review", label: "المراجعة" },
];

const EMPTY_TRAVELER: TravelerData = {
  fullNameAr: "",
  fullNameEn: "",
  birthDate: "",
  birthPlace: "",
  nationality: "SA",
  passportNumber: "",
  passportIssueDate: "",
  passportExpiryDate: "",
  gender: "male",
  maritalStatus: "single",
  phone: "",
  email: "",
  address: "",
  city: "",
  occupation: "",
  employer: "",
};

export function ApplyWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [stepIndex, setStepIndex] = React.useState(0);
  const [nationality, setNationality] = React.useState("SA");
  const [countrySlug, setCountrySlug] = React.useState(searchParams.get("country") ?? "");
  const [visaTypeSlug, setVisaTypeSlug] = React.useState("");
  const [traveler, setTraveler] = React.useState<TravelerData>(EMPTY_TRAVELER);
  const [family, setFamily] = React.useState<FamilyMember[]>([]);
  const [submitted, setSubmitted] = React.useState(false);

  const country = COUNTRIES.find((c) => c.slug === countrySlug);
  const visaType = country?.visaTypes.find((v) => v.slug === visaTypeSlug);

  function next() {
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setStepIndex((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const canProceed = [
    !!nationality,
    !!countrySlug,
    !!visaTypeSlug,
    !!(traveler.fullNameAr && traveler.fullNameEn && traveler.passportNumber && traveler.phone),
    true,
    true,
  ][stepIndex];

  function addFamilyMember() {
    setFamily((f) => [
      ...f,
      { id: crypto.randomUUID(), relation: "spouse", fullNameAr: "", fullNameEn: "" },
    ]);
  }

  function updateFamilyMember(id: string, patch: Partial<FamilyMember>) {
    setFamily((f) => f.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  }

  function removeFamilyMember(id: string) {
    setFamily((f) => f.filter((m) => m.id !== id));
  }

  if (submitted) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <CardContent className="p-10">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-emerald-50">
            <PartyPopper className="size-8 text-emerald-600" />
          </div>
          <h2 className="mb-2 text-xl font-extrabold text-navy-950">تم إنشاء طلبك بنجاح</h2>
          <p className="mb-6 text-[14px] leading-7 text-muted-foreground">
            الخطوة التالية هي رفع مستنداتك حتى يستطيع فريقنا مراجعة طلبك وتجهيزه. يمكنك متابعة حالة الطلب في أي وقت
            من لوحة &quot;ملفي&quot;.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Button onClick={() => router.push("/documents")} variant="default" size="lg">
              رفع المستندات الآن
            </Button>
            <Button onClick={() => router.push("/dashboard")} variant="outline" size="lg">
              الذهاب إلى ملفي
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-10">
        <StepIndicator steps={STEPS} currentIndex={stepIndex} />
      </div>

      <Card>
        <CardContent className="p-6 sm:p-8">
          {stepIndex === 0 && (
            <StepBlock title="اختر الجنسية" desc="سنستخدم هذه المعلومة لتحديد المتطلبات المناسبة لك.">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {NATIONALITIES.map((n) => (
                  <button
                    key={n.code}
                    onClick={() => setNationality(n.code)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-sm font-semibold transition-colors",
                      nationality === n.code ? "border-navy-900 bg-navy-50" : "border-border hover:border-navy-200"
                    )}
                  >
                    <span className="text-2xl">{n.flag}</span>
                    {n.labelAr}
                  </button>
                ))}
              </div>
            </StepBlock>
          )}

          {stepIndex === 1 && (
            <StepBlock title="اختر دولة السفر" desc="اختر الدولة التي ترغب بالتقديم للحصول على تأشيرتها.">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => {
                      setCountrySlug(c.slug);
                      setVisaTypeSlug("");
                    }}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-sm font-semibold transition-colors",
                      countrySlug === c.slug ? "border-navy-900 bg-navy-50" : "border-border hover:border-navy-200"
                    )}
                  >
                    <span className="text-2xl">{c.flagEmoji}</span>
                    {c.nameAr}
                  </button>
                ))}
              </div>
              {country?.region === "schengen" && (
                <p className="mt-4 text-[12.5px] leading-6 text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  تذكير: يجب التقديم عبر الدولة التي ستقضي فيها أطول مدة من رحلتك، أو دولة الدخول الأول عند تساوي
                  المدد. راجع{" "}
                  <Link href="/#schengen-helper" className="underline font-semibold">
                    مساعد اختيار دولة شنغن
                  </Link>{" "}
                  في الصفحة الرئيسية إذا لم تكن متأكدًا.
                </p>
              )}
            </StepBlock>
          )}

          {stepIndex === 2 && country && (
            <StepBlock title="اختر نوع التأشيرة" desc={`أنواع التأشيرات المتاحة لدولة ${country.nameAr}.`}>
              <RadioGroup value={visaTypeSlug} onValueChange={setVisaTypeSlug} className="gap-3">
                {country.visaTypes.map((v) => (
                  <label
                    key={v.slug}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors",
                      visaTypeSlug === v.slug ? "border-navy-900 bg-navy-50" : "border-border hover:border-navy-200"
                    )}
                  >
                    <RadioGroupItem value={v.slug} className="mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-navy-900">{v.nameAr}</div>
                      <div className="text-[12.5px] text-muted-foreground">{v.descriptionAr}</div>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </StepBlock>
          )}

          {stepIndex === 3 && (
            <StepBlock title="بيانات المسافر" desc="عبّئ بياناتك كما تظهر في جواز السفر لضمان دقة الطلب.">
              <TravelerForm data={traveler} onChange={setTraveler} />
            </StepBlock>
          )}

          {stepIndex === 4 && (
            <StepBlock
              title="أفراد العائلة (اختياري)"
              desc="يمكنك إضافة الزوجة أو الأبناء ضمن نفس الطلب العائلي — لكل فرد بيانات ومستندات مستقلة لاحقًا."
            >
              <div className="space-y-3">
                {family.map((m) => (
                  <div key={m.id} className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-[140px_1fr_1fr_auto]">
                    <Select value={m.relation} onValueChange={(v) => updateFamilyMember(m.id, { relation: v as FamilyMember["relation"] })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">الزوجة</SelectItem>
                        <SelectItem value="son">الابن</SelectItem>
                        <SelectItem value="daughter">الابنة</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="الاسم بالعربي"
                      value={m.fullNameAr}
                      onChange={(e) => updateFamilyMember(m.id, { fullNameAr: e.target.value })}
                    />
                    <Input
                      placeholder="الاسم بالإنجليزي"
                      value={m.fullNameEn}
                      onChange={(e) => updateFamilyMember(m.id, { fullNameEn: e.target.value })}
                    />
                    <Button variant="ghost" size="icon" onClick={() => removeFamilyMember(m.id)}>
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" onClick={addFamilyMember} className="w-full sm:w-auto">
                  <Plus className="size-4" /> إضافة فرد من العائلة
                </Button>
              </div>
            </StepBlock>
          )}

          {stepIndex === 5 && country && visaType && (
            <StepBlock title="مراجعة الطلب" desc="تأكد من صحة بياناتك قبل إنشاء الطلب.">
              <div className="space-y-4">
                <ReviewRow label="الجنسية" value={NATIONALITIES.find((n) => n.code === nationality)?.labelAr ?? ""} />
                <ReviewRow label="دولة السفر" value={`${country.flagEmoji} ${country.nameAr}`} />
                <ReviewRow label="نوع التأشيرة" value={visaType.nameAr} />
                <ReviewRow label="اسم المسافر" value={traveler.fullNameAr} />
                <ReviewRow label="رقم الجواز" value={traveler.passportNumber} />
                <ReviewRow label="رقم الجوال" value={traveler.phone} />
                {family.length > 0 && (
                  <ReviewRow label="أفراد العائلة" value={`${family.length} فرد مضاف`} />
                )}
                <Badge variant="gold" className="mt-2">
                  <CheckCircle2 className="size-3.5" />
                  البيانات جاهزة للإرسال
                </Badge>
              </div>
            </StepBlock>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <Button variant="ghost" onClick={back} disabled={stepIndex === 0}>
              <ChevronRight className="size-4" />
              السابق
            </Button>
            {stepIndex < STEPS.length - 1 ? (
              <Button variant="default" onClick={next} disabled={!canProceed}>
                التالي
                <ChevronLeft className="size-4" />
              </Button>
            ) : (
              <Button variant="default" onClick={() => setSubmitted(true)}>
                تأكيد وإنشاء الطلب
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StepBlock({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-extrabold text-navy-950">{title}</h2>
      <p className="mb-6 mt-1 text-[13.5px] text-muted-foreground">{desc}</p>
      {children}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-navy-900">{value || "—"}</span>
    </div>
  );
}

function TravelerForm({ data, onChange }: { data: TravelerData; onChange: (d: TravelerData) => void }) {
  function set<K extends keyof TravelerData>(key: K, value: TravelerData[K]) {
    onChange({ ...data, [key]: value });
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="الاسم بالعربي" required>
        <Input value={data.fullNameAr} onChange={(e) => set("fullNameAr", e.target.value)} />
      </Field>
      <Field label="الاسم بالإنجليزي" required>
        <Input value={data.fullNameEn} onChange={(e) => set("fullNameEn", e.target.value)} dir="ltr" />
      </Field>
      <Field label="تاريخ الميلاد">
        <Input type="date" value={data.birthDate} onChange={(e) => set("birthDate", e.target.value)} />
      </Field>
      <Field label="مكان الميلاد">
        <Input value={data.birthPlace} onChange={(e) => set("birthPlace", e.target.value)} />
      </Field>
      <Field label="رقم الجواز" required>
        <Input value={data.passportNumber} onChange={(e) => set("passportNumber", e.target.value)} dir="ltr" />
      </Field>
      <Field label="تاريخ إصدار الجواز">
        <Input type="date" value={data.passportIssueDate} onChange={(e) => set("passportIssueDate", e.target.value)} />
      </Field>
      <Field label="تاريخ انتهاء الجواز">
        <Input type="date" value={data.passportExpiryDate} onChange={(e) => set("passportExpiryDate", e.target.value)} />
      </Field>
      <Field label="الجنس">
        <Select value={data.gender} onValueChange={(v) => set("gender", v as TravelerData["gender"])}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="male">ذكر</SelectItem>
            <SelectItem value="female">أنثى</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field label="الحالة الاجتماعية">
        <Select value={data.maritalStatus} onValueChange={(v) => set("maritalStatus", v as TravelerData["maritalStatus"])}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="single">أعزب</SelectItem>
            <SelectItem value="married">متزوج</SelectItem>
            <SelectItem value="divorced">مطلق</SelectItem>
            <SelectItem value="widowed">أرمل</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field label="رقم الجوال" required>
        <Input value={data.phone} onChange={(e) => set("phone", e.target.value)} dir="ltr" placeholder="05xxxxxxxx" />
      </Field>
      <Field label="البريد الإلكتروني">
        <Input type="email" value={data.email} onChange={(e) => set("email", e.target.value)} dir="ltr" />
      </Field>
      <Field label="المدينة">
        <Input value={data.city} onChange={(e) => set("city", e.target.value)} />
      </Field>
      <Field label="العنوان" className="sm:col-span-2">
        <Input value={data.address} onChange={(e) => set("address", e.target.value)} />
      </Field>
      <Field label="المهنة">
        <Input value={data.occupation} onChange={(e) => set("occupation", e.target.value)} />
      </Field>
      <Field label="جهة العمل">
        <Input value={data.employer} onChange={(e) => set("employer", e.target.value)} />
      </Field>
    </div>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {children}
    </div>
  );
}
