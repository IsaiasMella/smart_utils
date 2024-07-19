import { isArray } from '../checks/isArray';
import { isEmpty } from '../checks/isEmpty';

export const chunk = <T>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  let index = 0;
  if (
    // Stryker disable next-line all
    isArray(array) &&
    !isEmpty(array) &&
    typeof size === 'number' &&
    size >= 1 &&
    size < array.length
  ) {
    while (index < array.length) {
      // Push a chunk of the array into the result, depending on the specified size.
      result.push(array.slice(index, index + size));
      index += size;
    }
  }
  return result;
};

export const unique = <T>(array: T[]): T[] => {
  // The new operator creates an instance of Set.
  // Set is a data structure that allows only unique values.
  // Once the Set with unique values has been created, the spread operator (...) is used to convert the Set back into an array.
  if (
    // Stryker disable next-line all
    isArray(array) &&
    !isEmpty(array)
  ) {
    return [...new Set(array)];
  }
  return [];
};

export const flattenWithDepth = <T extends Array<T>>(
  array: (T | T[])[],
  depth: number
): T[] => {
  if (
    // Stryker disable next-line all
    isArray(array) &&
    !isEmpty(array) &&
    typeof depth === 'number'
  ) {
    return array.reduce((acc, val) => {
      return acc.concat(
        Array.isArray(val) && depth > 1 ? flattenWithDepth(val, depth - 1) : val
      );
    }, [] as T[]);
  }
  return [];
};

export const groupBy = <T, K extends keyof T>(
  array: T[],
  property: K
): Record<string, T[]> => {
  if (
    // Stryker disable next-line all
    isArray(array) &&
    !isEmpty(array)
  ) {
    return array.reduce((acc, obj) => {
      const key = String(obj[property]);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {} as Record<string, T[]>);
  }
  return {};
};
