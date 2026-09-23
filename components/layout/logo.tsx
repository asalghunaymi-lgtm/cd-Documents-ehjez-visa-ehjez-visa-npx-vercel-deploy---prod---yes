import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  const mark = (
    <Image
      src="/logo.png"
      alt="وكالة منفذ السعادة للسفر والسياحة"
      width={466}
      height={500}
      priority
      className="h-16 w-auto object-contain"
    />
  );

  return (
    <Link href="/" className={cn("flex shrink-0 items-center", className)}>
      {dark ? (
        <span className="flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm">
          {mark}
        </span>
      ) : (
        mark
      )}
    </Link>
  );
}
