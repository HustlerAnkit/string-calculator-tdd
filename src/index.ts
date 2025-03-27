export function add(numbers: string): number {
  if (!numbers) return 0;

  let separator = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    let delimiter = parts[0].slice(2);
    delimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    separator = new RegExp(delimiter);
    numbers = parts[1];
  }

  const allNumbers = numbers.split(separator);

  const invalidChar = allNumbers.filter((n) => isNaN(+n));

  if (invalidChar.length > 0) {
    throw new Error(
      `invalid numbers are encountered: ${invalidChar.join(",")}`
    );
  }

  const negatives = allNumbers.filter((n) => +n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers are not allowed: ${negatives.join(",")}`);
  }

  return allNumbers.reduce((sum, number) => sum + +number, 0);
}
