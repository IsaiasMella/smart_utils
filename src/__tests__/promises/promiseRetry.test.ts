import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { promiseRetry } from '../../promises';

describe('promiseRetry', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should resolve on the first try if the function succeeds', async () => {
    const mockFn = vi.fn().mockResolvedValue('success');
    const result = promiseRetry(mockFn);

    await expect(result).resolves.toBe('success');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should fail after reaching the maximum number of attempts', async () => {
    vi.useFakeTimers();

    const mockFn = vi.fn().mockRejectedValue(new Error('Persistent error'));

    const testPromise = Promise.all([
      expect(promiseRetry(mockFn)).rejects.toThrow(
        'All attempts failed. Last error: Persistent error'
      ),
      vi.runAllTimersAsync(),
    ]);

    await testPromise;

    expect(mockFn).toHaveBeenCalledTimes(3);

    vi.useRealTimers();
  }, 1000);

  it('should respect the custom maximum number of attempts', async () => {
    vi.useFakeTimers();

    const mockFn = vi.fn().mockRejectedValue(new Error('Custom error'));

    const testPromise = Promise.all([
      expect(promiseRetry(mockFn, 5)).rejects.toThrow(
        'All attempts failed. Last error: Custom error'
      ),
      vi.runAllTimersAsync(),
    ]);

    await testPromise;

    expect(mockFn).toHaveBeenCalledTimes(5);

    vi.useRealTimers();
  }, 1000);

  it('should respect the custom delay between attempts', async () => {
    vi.useFakeTimers();

    const mockFn = vi
      .fn()
      .mockRejectedValueOnce(new Error('Fail'))
      .mockResolvedValue('success');

    const resultPromise = promiseRetry(mockFn, 3, 500);

    const testPromise = Promise.all([resultPromise, vi.runAllTimersAsync()]);

    const [result] = await testPromise;

    expect(result).toBe('success');
    expect(mockFn).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  }, 1000);

  it('should handle functions that return undefined', async () => {
    const mockFn = vi.fn().mockResolvedValue(undefined);

    const result = promiseRetry(mockFn);

    await expect(result).resolves.toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
