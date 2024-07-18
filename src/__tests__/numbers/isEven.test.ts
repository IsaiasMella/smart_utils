import { describe, it, expect } from 'vitest';
import { isEven } from '../../number';

describe('isEven function', () => {
  it('should return true for even numbers', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(100)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(99)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });

  it('should handle large numbers correctly', () => {
    expect(isEven(1000000)).toBe(true);
    expect(isEven(1000001)).toBe(false);
  });

  it('should handle decimal numbers', () => {
    expect(isEven(2.0)).toBe(true);
    expect(isEven(2.1)).toBe(false);
    expect(isEven(3.0)).toBe(false);
  });
});