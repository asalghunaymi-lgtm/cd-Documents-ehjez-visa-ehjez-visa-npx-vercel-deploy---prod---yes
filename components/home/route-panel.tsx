import { Compass } from "lucide-react";

const DESTINATIONS = [
  { city: "لندن", region: "بريطانيا" },
  { city: "باريس", region: "شنغن" },
  { city: "دبي", region: "الإمارات" },
  { city: "تورنتو", region: "كندا" },
];

export function RoutePanel() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-navy-950 p-8 sm:p-10">
      <Compass
        aria-hidden
        strokeWidth={0.6}
        className="pointer-events-none absolute -end-12 -top-12 size-64 text-white/[0.05]"
      />

      <div className="relative flex items-center gap-2.5">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
          <span className="relative inline-flex size-2.5 rounded-full bg-gold-400" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-200">
          الرياض · نقطة الانطلاق
        </span>
      </div>

      <p className="relative mt-4 max-w-[26ch] text-sm leading-7 text-navy-300">
        وجهات نغطي متطلباتها بالتفصيل، بمتابعة مستمرة للتحديثات الرسمية.
      </p>

      <ul className="relative mt-8 divide-y divide-white/10 border-t border-white/10">
        {DESTINATIONS.map((d) => (
          <li key={d.city} className="flex items-center justify-between py-3.5 text-sm">
            <span className="font-bold text-white">{d.city}</span>
            <span className="text-[12px] text-navy-300">{d.region}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
