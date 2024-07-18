import { describe, expect, it } from 'vitest';
import { sum } from '../../number';

describe('sum function', () => {
  it('should return 0 for an empty input', () => {
    expect(sum()).toBe(0);
  });

  it('should return the same number when only one argument is provided', () => {
    expect(sum(5)).toBe(5);
    expect(sum(-3)).toBe(-3);
  });

  it('should correctly sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('should correctly sum multiple numbers', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
    expect(sum(-1, -2, -3, -4, -5)).toBe(-15);
  });
});
