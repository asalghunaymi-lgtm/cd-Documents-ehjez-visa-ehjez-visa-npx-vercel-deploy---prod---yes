import { Check } from "lucide-react";
import { ProgressStep } from "@/lib/data/mock-application";
import { cn } from "@/lib/utils";

export function ApplicationProgress({ steps }: { steps: ProgressStep[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, i) => (
        <li key={step.key} className="relative flex gap-4 pb-8 last:pb-0">
          {i < steps.length - 1 && (
            <span
              className={cn(
                "absolute right-[15px] top-8 h-full w-0.5 rtl:right-[15px]",
                step.state === "done" ? "bg-navy-900" : "bg-navy-100"
              )}
            />
          )}
          <span
            className={cn(
              "z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
              step.state === "done" && "bg-navy-900 text-white",
              step.state === "current" && "bg-gold-500 text-navy-950 ring-4 ring-gold-100",
              step.state === "upcoming" && "bg-navy-50 text-navy-300"
            )}
          >
            {step.state === "done" ? <Check className="size-4" /> : i + 1}
          </span>
          <div className="pt-1">
            <p
              className={cn(
                "text-sm font-bold",
                step.state === "upcoming" ? "text-navy-400" : "text-navy-900"
              )}
            >
              {step.label}
            </p>
            {step.state === "current" && (
              <p className="mt-0.5 text-[12.5px] text-gold-700">جارٍ العمل على هذه الخطوة الآن</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
