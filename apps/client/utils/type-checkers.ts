export function exhaustiveCheck(input: never) {
  console.error(`Unexpected input: ${input}`)
  return input
}
