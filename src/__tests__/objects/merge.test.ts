import { describe, it, expect } from 'vitest';
import { merge } from '../../objects';

describe('merge function', () => {
  it('should merge objects in an array correctly', () => {
    const input = [
      { obj: { a: 1 } },
      { obj: { b: 2 } },
      { obj: { c: 3 } }
    ];
    const expected = { a: 1, b: 2, c: 3 };
    expect(merge(input)).toEqual(expected);
  });

  it('should handle nested objects', () => {
    const input = [
      { obj: { a: { x: 1 } } },
      { obj: { b: { y: 2 } } }
    ];
    const expected = { a: { x: 1 }, b: { y: 2 } };
    expect(merge(input)).toEqual(expected);
  });

  it('should handle arrays within objects', () => {
    const input = [
      { obj: { a: [1, 2] } },
      { obj: { b: [3, 4] } }
    ];
    const expected = { a: [1, 2], b: [3, 4] };
    expect(merge(input)).toEqual(expected);
  });

  it('should return the correct type', () => {
    interface TestType {
      a: number;
      b: string;
    }
    const input = [
      { obj: { a: 1 } },
      { obj: { b: 'test' } }
    ];
    const result = merge<TestType>(input);
    expect(result.a).toBe(1);
    expect(result.b).toBe('test');
  });
});