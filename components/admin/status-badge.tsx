import { Badge } from "@/components/ui/badge";
import { APPLICATION_STATUS_LABELS, ApplicationStatus } from "@/types";

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
  return <Badge variant={VARIANT_MAP[status]}>{APPLICATION_STATUS_LABELS[status]}</Badge>;
}
