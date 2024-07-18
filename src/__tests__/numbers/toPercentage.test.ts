import { describe, expect, it } from 'vitest';
import { toPercentage } from '../../number';

describe('toPercentage', () => {
  it('should return a percentage string', () => {
    expect(toPercentage(1)).toBe('100.00%');
  });

  it('should return a percentage without decimals', () => {
    expect(toPercentage(1, 0)).toBe('100%');
    expect(toPercentage(2, 0)).toBe('200%');
  });

  it('should return a percentage with decimals', () => {
    expect(toPercentage(0.5689464, 1)).toBe('56.9%');
    expect(toPercentage(2, 3)).toBe('200.000%');
  });

  it('should handle negative numbers', () => {
    expect(toPercentage(-0.25)).toBe('-25.00%');
    expect(toPercentage(-1.5, 1)).toBe('-150.0%');
  });

  it('should handle 0 correctly', () => {
    expect(toPercentage(0)).toBe('0.00%');
  });
});
