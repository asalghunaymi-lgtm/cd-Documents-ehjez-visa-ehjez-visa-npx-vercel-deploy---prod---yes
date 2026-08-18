import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-lg border border-input bg-white px-4 py-2 text-sm text-navy-950 placeholder:text-muted-foreground shadow-xs transition-colors outline-none",
        "focus-visible:border-navy-400 focus-visible:ring-2 focus-visible:ring-navy-100",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-red-100",
        className
      )}
      {...props}
    />
  );
}

export { Input };
