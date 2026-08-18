import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-navy-50 text-navy-800 border-navy-100",
        gold: "bg-gold-50 text-gold-800 border-gold-200",
        success: "bg-emerald-50 text-emerald-700 border-emerald-200",
        warning: "bg-amber-50 text-amber-700 border-amber-200",
        destructive: "bg-red-50 text-red-700 border-red-200",
        outline: "bg-white text-navy-700 border-navy-200",
        solid: "bg-navy-900 text-white border-navy-900",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
