import { cn } from "@/lib/utils";

export function SectionKicker({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("mb-4 flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-8 shrink-0 bg-gold-500" />
      <span
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.18em]",
          tone === "dark" ? "text-gold-400" : "text-gold-700"
        )}
      >
        {children}
      </span>
    </div>
  );
}
