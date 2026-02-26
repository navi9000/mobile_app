export function formatLargeNumber(num: number) {
  if (num >= 1000000000) {
    return `${Math.floor(num / 1000000000)}B`
  }
  if (num >= 1000000) {
    return `${Math.floor(num / 1000000)}M`
  }
  if (num >= 10000) {
    return `${Math.floor(num / 1000)}k`
  }
  if (num >= 1000) {
    return `${Math.floor(num / 1000)},${num % 1000}`
  }
  return num.toString()
}

export function newMessageLabelByNumber(length: number) {
  const isSingular = length % 10 === 1 && length % 100 !== 11
  return [length, "new", isSingular ? "message" : "messages"].join(" ")
}
