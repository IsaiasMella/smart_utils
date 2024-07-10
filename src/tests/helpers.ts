import { afterEach, beforeEach, vi } from 'vitest';

beforeEach(() => {
  vi.useFakeTimers();
  document.cookie = '';
});

afterEach(()=>{
  vi.resetAllMocks();
});