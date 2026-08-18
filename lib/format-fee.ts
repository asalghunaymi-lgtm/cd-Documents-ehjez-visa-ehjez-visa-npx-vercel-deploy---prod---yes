export function formatFeeRange(fee: number | [number, number]) {
  if (Array.isArray(fee)) {
    return `${fee[0].toLocaleString("ar-SA")} - ${fee[1].toLocaleString("ar-SA")} ريال`;
  }
  return `${fee.toLocaleString("ar-SA")} ريال`;
}
