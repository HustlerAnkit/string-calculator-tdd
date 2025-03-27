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

  const allNumbers: string[] = numbers.split(separator);

  const invalidChar: string[] = allNumbers.filter((n: string) => isNaN(+n));

  if (invalidChar.length > 0) {
    throw new Error(
      `invalid numbers are encountered: ${invalidChar.join(",")}`
    );
  }

  const negatives: string[] = allNumbers.filter((n: string) => +n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers are not allowed: ${negatives.join(",")}`);
  }

  return allNumbers.reduce(
    (sum: number, number: string) => sum + Number(number),
    0
  );
}
