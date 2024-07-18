import { describe, it, expect } from 'vitest';
import { getDeepProperty } from '../../objects';

describe('getDeepProperty function', () => {
  it('should return the value of a top-level property', () => {
    const obj = { a: 1, b: 2 };
    expect(getDeepProperty(obj, 'a')).toBe(1);
  });

  it('should return the value of a nested property', () => {
    const obj = { a: { b: { c: 3 } } };
    expect(getDeepProperty(obj, 'c')).toBe(3);
  });

  it('should return undefined for a non-existent property', () => {
    const obj = { a: 1, b: 2 };
    expect(getDeepProperty(obj, 'c')).toBeUndefined();
  });

  it('should throw an error for an empty object', () => {
    expect(() => getDeepProperty({}, 'a')).toThrow('The argument is empty');
  });

  it('should handle multiple nested levels', () => {
    const obj = { a: { b: { c: { d: { e: 5 } } } } };
    expect(getDeepProperty(obj, 'e')).toBe(5);
  });

  it('should return the last occurrence of a property', () => {
    const obj = { a: { b: 1 }, c: { b: 2 } };
    expect(getDeepProperty(obj, 'b')).toBe(2);
  });

  it('should handle properties with undefined values', () => {
    const obj = { a: { b: undefined } };
    expect(getDeepProperty(obj, 'b')).toBeUndefined();
  });

  it('should handle throwing an error for null values', () => {
    const obj = { a: { b: null } };
    expect(() => getDeepProperty(obj, 'b')).toThrow('The argument is empty');
  });

  it('should handle throwing an error for array values', () => {
    const arr = [1,2,3];
    //@ts-expect-error We need to check all cases of arguments
    expect(() => getDeepProperty(arr, 'a')).toThrow('The argument is an array, but not an object');
  });
});