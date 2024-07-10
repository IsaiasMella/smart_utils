// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any

export const debounce = (fn: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | undefined;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay);
  };
};

export const throttle = <T extends AnyFunction>(
  fn: T,
  delay: number = 500
): ((...args: Parameters<T>) => void) => {
  let timeOutId: ReturnType<typeof setTimeout> | undefined;
  
  return function throttledFn(...args: Parameters<T>){
    if (timeOutId !== undefined) {
      return;
    }
  
    timeOutId = setTimeout(() => {
      timeOutId = undefined;
      fn(...args);
    }, delay);

    return fn(...args);
  };
};
  
export const memoize = <T extends AnyFunction>(fn: T): T => {
  const cache = new Map<string, ReturnType<T>>();

  return function(...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  } as T;
};