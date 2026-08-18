import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-muted-foreground shadow-xs transition-colors outline-none",
        "focus-visible:border-navy-400 focus-visible:ring-2 focus-visible:ring-navy-100",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
