import { describe, it, expect, vi } from 'vitest';
import { promiseDelay } from '../../promises';

describe('promiseDelay', () => {
  it('debería resolver después del tiempo especificado', async () => {
    vi.useFakeTimers();
    const delay = 100;
    const promise = promiseDelay(delay);

    expect(await Promise.race([promise, 'not resolved'])).toBe('not resolved');

    vi.advanceTimersByTime(delay);

    await expect(promise).resolves.toBeUndefined();

    vi.useRealTimers();
  });

  it('debería resolver con el valor proporcionado', async () => {
    vi.useFakeTimers();
    const delay = 100;
    const value = 'test';
    const promise = promiseDelay(delay, value);

    expect(await Promise.race([promise, 'not resolved'])).toBe('not resolved');

    vi.advanceTimersByTime(delay);

    await expect(promise).resolves.toBe(value);

    vi.useRealTimers();
  });

  it('debería resolver con undefined si no se proporciona un valor', async () => {
    vi.useFakeTimers();
    const delay = 100;
    const promise = promiseDelay(delay);

    expect(await Promise.race([promise, 'not resolved'])).toBe('not resolved');

    vi.advanceTimersByTime(delay);

    await expect(promise).resolves.toBeUndefined();

    vi.useRealTimers();
  });

  it('debería funcionar con diferentes tipos de datos', async () => {
    vi.useFakeTimers();
    const delay = 100;

    const numberPromise = promiseDelay(delay, 42);
    const boolPromise = promiseDelay(delay, true);
    const objectPromise = promiseDelay(delay, { key: 'value' });

    expect(await Promise.race([numberPromise, 'not resolved'])).toBe('not resolved');
    expect(await Promise.race([boolPromise, 'not resolved'])).toBe('not resolved');
    expect(await Promise.race([objectPromise, 'not resolved'])).toBe('not resolved');

    vi.advanceTimersByTime(delay);

    await expect(numberPromise).resolves.toBe(42);
    await expect(boolPromise).resolves.toBe(true);
    await expect(objectPromise).resolves.toEqual({ key: 'value' });

    vi.useRealTimers();
  });
});
