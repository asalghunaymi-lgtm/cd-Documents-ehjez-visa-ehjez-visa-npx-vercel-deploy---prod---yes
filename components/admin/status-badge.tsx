"use client";

import { Badge } from "@/components/ui/badge";
import { ApplicationStatus } from "@/types";
import { useI18n } from "@/lib/i18n/client";

const VARIANT_MAP: Record<ApplicationStatus, "default" | "success" | "warning" | "destructive" | "outline"> = {
  new: "outline",
  awaiting_documents: "warning",
  under_review: "default",
  documents_missing: "destructive",
  preparing_form: "default",
  awaiting_customer: "warning",
  ready_for_appointment: "default",
  appointment_booked: "default",
  submitted: "default",
  awaiting_decision: "warning",
  approved: "success",
  rejected: "destructive",
  closed: "outline",
};

export function ApplicationStatusBadge({ status }: { status: ApplicationStatus }) {
  const { t } = useI18n();
  return <Badge variant={VARIANT_MAP[status]}>{t.applicationStatus[status]}</Badge>;
}
