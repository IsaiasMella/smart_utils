import { describe, expect, it } from 'vitest';
import { isArray } from '../checks/isArray';
import { isEmpty } from '../checks/isEmpty';
import { isObject } from '../checks';

describe ('isArray function', ()=>{
  it.each([
    ['', false],
    [{}, false]
  ])('isArray(%d)-> %o', (a, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(isArray(a)).toStrictEqual(expected);
  });
});

describe ('isEmpty function', ()=>{
  it.each([
    [null, true],
    [undefined, true],
    ['', true],
    [{}, true],
    [[1], false]
  ])('isEmpty(%d)-> %o', (a, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(isEmpty(a)).toStrictEqual(expected);
  });
});

describe('isObject function', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1, b: 2 })).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isObject([])).toBe(false);
    expect(isObject([1, 2, 3])).toBe(false);
  });

  it('should return false for primitive types', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});