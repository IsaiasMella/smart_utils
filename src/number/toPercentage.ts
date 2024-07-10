//Converts a number to a percentage with a specified number of decimal places.

export function toPercentage(number: number, decimals: number = 2): string {
  const percentage = number * 100;
  return `${percentage.toFixed(decimals)}%`;
}