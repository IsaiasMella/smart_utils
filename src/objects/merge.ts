import { isArray } from '../checks';

interface Args {
  obj: object;
}

export const merge = <T>(objArray: Args[]): T => {
  // Stryker disable next-line all
  if (!isArray(objArray)) {throw new Error('The argument is not an array');}

  return objArray.reduce((prev, current) => {
    return { ...prev, ...current.obj };
  }, {}) as T;
};
