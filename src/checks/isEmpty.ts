export const isEmpty = (value: unknown): boolean => {
  const isQuantifiable = value instanceof Object;
  if (!isQuantifiable) {return true;}
  return Object.entries(value).length === 0;
};