import { isArray, isEmpty, isObject } from '../checks';

export const deepClone = <T>(source: T): T => {
  if (isEmpty(source)) {throw new Error('The argument is empty');}

  if (isArray(source)) {
    return (source as unknown as T[]).map((item: unknown) => {
      if (isArray(item) || isObject(item)) {
        return deepClone(item);
      }
      return item;
    }) as unknown as T;
  }

  let objectClone: T = {} as T;

  if (isObject(source)) {
    for (const item in source) {
      // Verificar si la propiedad es parte del objeto y no heredada
      if (Object.prototype.hasOwnProperty.call(source, item)) {
        if (typeof source[item] === 'object' && source[item] !== null) {
          objectClone = {
            ...objectClone,
            [item]: deepClone(source[item]),
          };
        } else {
          objectClone = {
            ...objectClone,
            [item]: source[item],
          };
        }
      }
    }
  }
  return objectClone;
};
