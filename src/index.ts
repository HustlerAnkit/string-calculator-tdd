export function add(numbers: string): number {
  if (!numbers) return 0;
  const allNumbers = numbers.split(",").map((number) => parseInt(number, 10));
  const negatives = allNumbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers are not allowed: ${negatives.join(",")}`);
  }

  return allNumbers.reduce((sum, number) => sum + number, 0);
}
