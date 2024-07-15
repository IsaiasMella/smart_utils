import { describe, it, expect } from 'vitest';
import { omitProperty } from '../../objects';

describe('omitProperty function', () => {
  it('should remove a single property from an object', () => {
    const input = { a: 1, b: 2, c: 3 };
    const result = omitProperty(input, ['b']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should remove multiple properties from an object', () => {
    const input = { a: 1, b: 2, c: 3, d: 4 };
    const result = omitProperty(input, ['b', 'd']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should return the same object if no properties are specified to be removed', () => {
    const input = { a: 1, b: 2 };
    const result = omitProperty(input, []);
    expect(result).toEqual(input);
  });

  it('should handle objects with nested properties', () => {
    const input = { a: 1, b: { x: 10, y: 20 }, c: 3 };
    const result = omitProperty(input, ['b']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should not modify the original object', () => {
    const input = { a: 1, b: 2, c: 3 };
    omitProperty(input, ['b']);
    expect(input).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should handle non-existent properties gracefully', () => {
    const input = { a: 1, b: 2 };
    const result = omitProperty(input, ['c' as keyof typeof input]);
    expect(result).toEqual(input);
  });

  it('should work with objects containing methods', () => {
    const input = {
      a: 1,
      b: 2,
      method: () => 'test'
    };
    const result = omitProperty(input, ['method']);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should maintain the correct type of the returned object', () => {
    interface TestType {
      a: number;
      b: string;
      c: boolean;
    }
    const input: TestType = { a: 1, b: 'test', c: true };
    const result = omitProperty(input, ['b']);
    expect(result).toEqual({ a: 1, c: true });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    result.b;
  });
});