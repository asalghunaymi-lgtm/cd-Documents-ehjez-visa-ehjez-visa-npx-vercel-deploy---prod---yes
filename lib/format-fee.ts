export function formatFeeRange(fee: number | [number, number], locale: "ar" | "en" = "ar") {
  if (locale === "en") {
    const n = (v: number) => v.toLocaleString("en-US");
    return Array.isArray(fee) ? `SAR ${n(fee[0])}–${n(fee[1])}` : `SAR ${n(fee)}`;
  }
  if (Array.isArray(fee)) {
    return `${fee[0].toLocaleString("ar-SA")} - ${fee[1].toLocaleString("ar-SA")} ريال`;
  }
  return `${fee.toLocaleString("ar-SA")} ريال`;
}
