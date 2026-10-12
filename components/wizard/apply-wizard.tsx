"use client";

import * as React from "react";
import Link from "@/components/i18n/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronLeft, ChevronRight, Plus, Trash2, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { StepIndicator, type WizardStep } from "./step-indicator";
import { getCountries } from "@/lib/data/countries";
import { getNationalities } from "@/lib/data/nationalities";
import { useI18n, useLocalizedRouter } from "@/lib/i18n/client";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FamilyMember, TravelerData } from "@/types";
import { cn } from "@/lib/utils";

const STEP_KEYS = ["nationality", "country", "visaType", "traveler", "family", "review"] as const;

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
  const router = useLocalizedRouter();
  const searchParams = useSearchParams();
  const { t, locale } = useI18n();
  const w = t.wizard;
  const COUNTRIES = getCountries(locale);
  const NATIONALITIES = getNationalities(locale);
  const STEPS: WizardStep[] = STEP_KEYS.map((key) => ({ key, label: w.steps[key] }));

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
          <h2 className="mb-2 text-xl font-extrabold text-navy-950">{w.success.title}</h2>
          <p className="mb-6 text-[14px] leading-7 text-muted-foreground">
            {w.success.body}
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Button onClick={() => router.push("/documents")} variant="default" size="lg">
              {w.success.uploadDocuments}
            </Button>
            <Button onClick={() => router.push("/dashboard")} variant="outline" size="lg">
              {w.success.goToDashboard}
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
            <StepBlock title={w.nationality.title} desc={w.nationality.desc}>
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
            <StepBlock title={w.country.title} desc={w.country.desc}>
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
                  {w.country.schengenReminderStart}{" "}
                  <Link href="/#schengen-helper" className="underline font-semibold">
                    {w.country.schengenReminderLink}
                  </Link>{" "}
                  {w.country.schengenReminderEnd}
                </p>
              )}
            </StepBlock>
          )}

          {stepIndex === 2 && country && (
            <StepBlock title={w.visaType.title} desc={w.visaType.desc(country.nameAr)}>
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
            <StepBlock title={w.traveler.title} desc={w.traveler.desc}>
              <TravelerForm data={traveler} onChange={setTraveler} labels={w.fields} />
              <p className="mt-4 text-[12.5px] text-muted-foreground">{w.validation.requiredHint}</p>
            </StepBlock>
          )}

          {stepIndex === 4 && (
            <StepBlock
              title={w.family.title}
              desc={w.family.desc}
            >
              <div className="space-y-3">
                {family.map((m) => (
                  <div key={m.id} className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-[140px_1fr_1fr_auto]">
                    <Select value={m.relation} onValueChange={(v) => updateFamilyMember(m.id, { relation: v as FamilyMember["relation"] })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">{w.family.relations.spouse}</SelectItem>
                        <SelectItem value="son">{w.family.relations.son}</SelectItem>
                        <SelectItem value="daughter">{w.family.relations.daughter}</SelectItem>
                        <SelectItem value="other">{w.family.relations.other}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder={w.family.nameAr}
                      aria-label={w.family.nameAr}
                      value={m.fullNameAr}
                      onChange={(e) => updateFamilyMember(m.id, { fullNameAr: e.target.value })}
                    />
                    <Input
                      placeholder={w.family.nameEn}
                      aria-label={w.family.nameEn}
                      dir="ltr"
                      value={m.fullNameEn}
                      onChange={(e) => updateFamilyMember(m.id, { fullNameEn: e.target.value })}
                    />
                    <Button variant="ghost" size="icon" onClick={() => removeFamilyMember(m.id)} aria-label={w.family.remove} title={w.family.remove}>
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" onClick={addFamilyMember} className="w-full sm:w-auto">
                  <Plus className="size-4" /> {w.family.add}
                </Button>
              </div>
            </StepBlock>
          )}

          {stepIndex === 5 && country && visaType && (
            <StepBlock title={w.review.title} desc={w.review.desc}>
              <div className="space-y-4">
                <ReviewRow label={w.review.nationality} value={NATIONALITIES.find((n) => n.code === nationality)?.labelAr ?? ""} />
                <ReviewRow label={w.review.country} value={`${country.flagEmoji} ${country.nameAr}`} />
                <ReviewRow label={w.review.visaType} value={visaType.nameAr} />
                <ReviewRow label={w.review.travelerName} value={locale === "en" ? traveler.fullNameEn || traveler.fullNameAr : traveler.fullNameAr} />
                <ReviewRow label={w.review.passportNumber} value={traveler.passportNumber} />
                <ReviewRow label={w.review.phone} value={traveler.phone} />
                {family.length > 0 && (
                  <ReviewRow label={w.review.familyMembers} value={w.review.familyCount(family.length)} />
                )}
                <Badge variant="gold" className="mt-2">
                  <CheckCircle2 className="size-3.5" />
                  {w.review.ready}
                </Badge>
              </div>
            </StepBlock>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <Button variant="ghost" onClick={back} disabled={stepIndex === 0}>
              <ChevronRight className="size-4 ltr:-scale-x-100" />
              {w.back}
            </Button>
            {stepIndex < STEPS.length - 1 ? (
              <Button variant="default" onClick={next} disabled={!canProceed}>
                {w.next}
                <ChevronLeft className="size-4 ltr:-scale-x-100" />
              </Button>
            ) : (
              <Button variant="default" onClick={() => setSubmitted(true)}>
                {w.submit}
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

function TravelerForm({
  data,
  onChange,
  labels: l,
}: {
  data: TravelerData;
  onChange: (d: TravelerData) => void;
  labels: Dictionary["wizard"]["fields"];
}) {
  function set<K extends keyof TravelerData>(key: K, value: TravelerData[K]) {
    onChange({ ...data, [key]: value });
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label={l.fullNameAr} required>
        <Input dir="rtl" value={data.fullNameAr} onChange={(e) => set("fullNameAr", e.target.value)} />
      </Field>
      <Field label={l.fullNameEn} required>
        <Input value={data.fullNameEn} onChange={(e) => set("fullNameEn", e.target.value)} dir="ltr" />
      </Field>
      <Field label={l.birthDate}>
        <Input type="date" value={data.birthDate} onChange={(e) => set("birthDate", e.target.value)} />
      </Field>
      <Field label={l.birthPlace}>
        <Input value={data.birthPlace} onChange={(e) => set("birthPlace", e.target.value)} />
      </Field>
      <Field label={l.passportNumber} required>
        <Input value={data.passportNumber} onChange={(e) => set("passportNumber", e.target.value)} dir="ltr" />
      </Field>
      <Field label={l.passportIssueDate}>
        <Input type="date" value={data.passportIssueDate} onChange={(e) => set("passportIssueDate", e.target.value)} />
      </Field>
      <Field label={l.passportExpiryDate}>
        <Input type="date" value={data.passportExpiryDate} onChange={(e) => set("passportExpiryDate", e.target.value)} />
      </Field>
      <Field label={l.gender}>
        <Select value={data.gender} onValueChange={(v) => set("gender", v as TravelerData["gender"])}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="male">{l.genders.male}</SelectItem>
            <SelectItem value="female">{l.genders.female}</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field label={l.maritalStatus}>
        <Select value={data.maritalStatus} onValueChange={(v) => set("maritalStatus", v as TravelerData["maritalStatus"])}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="single">{l.maritalStatuses.single}</SelectItem>
            <SelectItem value="married">{l.maritalStatuses.married}</SelectItem>
            <SelectItem value="divorced">{l.maritalStatuses.divorced}</SelectItem>
            <SelectItem value="widowed">{l.maritalStatuses.widowed}</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field label={l.phone} required>
        <Input value={data.phone} onChange={(e) => set("phone", e.target.value)} dir="ltr" placeholder="05xxxxxxxx" />
      </Field>
      <Field label={l.email}>
        <Input type="email" value={data.email} onChange={(e) => set("email", e.target.value)} dir="ltr" />
      </Field>
      <Field label={l.city}>
        <Input value={data.city} onChange={(e) => set("city", e.target.value)} />
      </Field>
      <Field label={l.address} className="sm:col-span-2">
        <Input value={data.address} onChange={(e) => set("address", e.target.value)} />
      </Field>
      <Field label={l.occupation}>
        <Input value={data.occupation} onChange={(e) => set("occupation", e.target.value)} />
      </Field>
      <Field label={l.employer}>
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
