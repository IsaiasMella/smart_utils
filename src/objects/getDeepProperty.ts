import { isArray, isEmpty, isObject } from '../checks';

export interface NestedObject<T> {
  [key: string]: T | NestedObject<T>;
}

export const getDeepProperty = <T>(
  obj: NestedObject<T>,
  prop: string
): T | undefined => {
  if (isEmpty(obj)) {
    throw new Error('The argument is empty');
  }
  // Stryker disable next-line all
  if (isArray(obj)) {
    throw new Error('The argument is an array, but not an object');
  }

  let value: T | undefined = undefined;

  for (const item in obj) {
    if (isObject(obj[item])) {
      value = getDeepProperty(obj[item] as NestedObject<T>, prop);
      continue;
    }

    if (item === prop) {value = obj[item] as T;}
  }

  return value;
};
