import { describe, expect, it } from 'vitest';
import { chunk } from '../arrays/arrays';

describe ('chunk', ()=>{
  it('should return [] if param array is []', ()=>{
    const result = chunk([], 4);
    expect (result).toStrictEqual([]);
  });
  it.each([
    [[],4, []],
    [{}, 4, []],
    [[1,2,3,4,5,6,7,8,9], 2, [[1,2],[3,4],[5,6],[7,8],[9]]],
    [[1,2,3,4,5,6,7,8,9], '5',[]]
  ])('chunk(%o, %d)-> %o', (a,b, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(chunk(a, b)).toStrictEqual(expected);
  });
});