import { describe, expect, it, vi } from 'vitest';
import { debounce, memoize, throttle } from '../functionUtilities/functionUtilities';

describe('debounce function', ()=>{
  it('should return not return',()=>{
    const fn =vi.fn();
    const debounceFn = debounce(fn,200);
    debounceFn();
    debounceFn();
    expect(fn).not.toHaveBeenCalled(); 
  }); 
  it('should return not return once',()=>{
    const fn =vi.fn();
    const debounceFn = debounce(fn,200);
    debounceFn();
    vi.advanceTimersByTime(210);
    debounceFn();
    expect(fn).toHaveBeenCalledOnce(); 
  }
  );
});

describe('throttle function', ()=>{
  it('should return thrree times',()=>{
    const fn =vi.fn();
    const throttleFn = throttle(fn,200);
    throttleFn();
    throttleFn();
    expect(fn).toHaveBeenCalledOnce();  
    vi.advanceTimersByTime(400);
    throttleFn();
    expect(fn).toHaveBeenCalledTimes(3);
  }
  );
});

describe('memoize function', ()=>{
  it('should return the correct value from cache', () => {
    const fn = vi.fn((x: number) => x * 2);
    const memoizeFn = memoize(fn);
    memoizeFn(2);
    memoizeFn(2);
    memoizeFn(2);
    expect(fn).toHaveBeenCalledOnce();
    memoizeFn(3);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should return different values for different arguments', () => {
    const fn = vi.fn((x: number) => x * 2);
    const memoizeFn = memoize(fn);
    expect(memoizeFn(2)).toBe(4);
    expect(memoizeFn(3)).toBe(6); 
    expect(memoizeFn(2)).toBe(4); 
    expect(memoizeFn(3)).toBe(6); 
    expect(fn).toHaveBeenCalledTimes(2);
  });
});