export const isArray = (array: unknown): boolean=>{
  if (!Array.isArray(array)) {return false;}
  return true;
};