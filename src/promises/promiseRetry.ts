export const promiseRetry = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 300
): Promise<T | undefined> => {
  let lastError: Error = { message: '' } as Error;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  if (lastError?.message) {
    throw new Error(`All attempts failed. Last error: ${lastError.message}`);
  }
};
