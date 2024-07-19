import { describe, it, expect } from 'vitest';
import { deepClone } from '../../objects';

describe('deepClone function', () => {

  it('should clone a simple object', () => {
    const original = { a: 1, b: 2 };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  it('should clone a nested object', () => {
    const original = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b.d).not.toBe(original.b.d);
  });

  it('should clone an array', () => {
    const original = [1, 2, [3, 4]];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[2]).not.toBe(original[2]);
  });

  it('should clone an object with arrays', () => {
    const original = { a: [1, 2], b: { c: [3, 4] } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned.a).not.toBe(original.a);
    expect(cloned.b.c).not.toBe(original.b.c);
  });

  it('should clone object with null values', () => {
    const original = { a: null, b: { c: null } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
  });

  it('should clone object with function values', () => {
    const original = {
      a: function() { return 1; },
      b: { c: () => 2 }
    };
    const cloned = deepClone(original);
    expect(typeof cloned.a).toBe('function');
    expect(typeof cloned.b.c).toBe('function');
    expect(cloned.a()).toBe(1);
    expect(cloned.b.c()).toBe(2);
  });
});