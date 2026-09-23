import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 shrink-0", className)}>
      <span className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-gold-400/40 shadow-sm">
        <Image
          src="/logo.png"
          alt="وكالة منفذ السعادة للسفر والسياحة"
          width={776}
          height={717}
          priority
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className={cn("text-[17px] font-extrabold leading-tight tracking-normal", dark ? "text-white" : "text-navy-950")}>
          وكالة منفذ السعادة للسفر والسياحة
        </span>
        <span className={cn("text-[10px] font-medium leading-tight tracking-wide", dark ? "text-navy-300" : "text-muted-foreground")}>
          Munfadh Alsaada Agency for Travel and Tourism
        </span>
      </span>
    </Link>
  );
}
