import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WizardStep {
  key: string;
  label: string;
}

export function StepIndicator({ steps, currentIndex }: { steps: WizardStep[]; currentIndex: number }) {
  return (
    <div className="flex items-center justify-between gap-1 sm:gap-2">
      {steps.map((step, i) => {
        const state = i < currentIndex ? "done" : i === currentIndex ? "current" : "upcoming";
        return (
          <div key={step.key} className="flex flex-1 items-center gap-1 sm:gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors sm:size-9",
                  state === "done" && "bg-navy-900 text-white",
                  state === "current" && "bg-gold-500 text-navy-950 ring-4 ring-gold-100",
                  state === "upcoming" && "bg-navy-50 text-navy-400"
                )}
              >
                {state === "done" ? <Check className="size-4" /> : i + 1}
              </div>
              <span
                className={cn(
                  "hidden text-center text-[11px] font-semibold sm:block",
                  state === "upcoming" ? "text-navy-400" : "text-navy-800"
                )}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn("h-0.5 flex-1 rounded-full", state === "done" ? "bg-navy-900" : "bg-navy-100")} />
            )}
          </div>
        );
      })}
    </div>
  );
}
