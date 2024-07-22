import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { promiseTimeout } from '../../promises';

describe('promiseTimeout', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('debería resolver la promesa si se completa antes del timeout', async () => {
    const promise = Promise.resolve('éxito');
    const result = promiseTimeout(promise, 1000);

    await expect(result).resolves.toBe('éxito');
  });

  it('debería rechazar con un error de timeout si la promesa tarda demasiado', async () => {
    const promise = new Promise((resolve) => setTimeout(() => resolve('tardío'), 2000));
    const result = promiseTimeout(promise, 1000, 'Tiempo agotado');

    vi.advanceTimersByTime(1001);

    await expect(result).rejects.toThrow('Tiempo agotado');
  });

  it('debería usar el mensaje de error predeterminado si no se proporciona uno', async () => {
    const promise = new Promise((resolve) => setTimeout(() => resolve('tardío'), 2000));
    const result = promiseTimeout(promise, 1000);

    vi.advanceTimersByTime(1001);

    await expect(result).rejects.toThrow('Operation timed out');
  });

  it('debería rechazar con el error original si la promesa falla antes del timeout', async () => {
    const error = new Error('Error original');
    const promise = Promise.reject(error);
    const result = promiseTimeout(promise, 1000);

    await expect(result).rejects.toThrow('Error original');
  });
});