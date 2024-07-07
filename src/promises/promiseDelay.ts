export const promiseDelay = <T = void>(ms: number, value?: T): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(value as T), ms));
};
