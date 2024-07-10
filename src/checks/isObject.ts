import { isArray } from './isArray';

export const isObject = <T>(params: T): boolean => {
  if (isArray(params)) {
    return false;
  }
  return typeof params === 'object';
};
