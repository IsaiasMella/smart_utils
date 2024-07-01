import { describe, expect, it } from 'vitest';
import { chunk, flattenWithDepth, groupBy, unique } from '../arraysManipulation/arraysManipulation';

describe ('chunk', ()=>{
  it.each([
    [[],4, []],
    [{'name':'jhon'}, 2,[]],
    [{}, 4, []],
    [[1,2,3,4,5,6,7,8,9], 2, [[1,2],[3,4],[5,6],[7,8],[9]]],
    [[1,2,3,4,5,6,7,8,9], '5',[]],
    [[1,2,3,4,5,6,7,8,9], 0,[]],
    [[1,2], 1,[[1],[2]]],
    [[1,2,3,4,5,6,7,8,9], true,[]],
    [[1,2,3,4,5,6,7,8,9], -1,[]],
    [true, true,[]],
    [[5],true,[]],
    [true, 2,[]],
    ['string', 2, []],
    [[1,2, 3], 2, [[1,2],[3]]],
    [[1,2], 1, [[1], [2]]],
    [[1,2], 2, []]
  ])('chunk(%o, %d)-> %o', (a,b, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(chunk(a, b)).toStrictEqual(expected);
  });
});

describe ('unique', ()=>{
  it.each([
    [[1,2,2], [1, 2]],
    [[], []],
    [{}, []]
  ])('unique(%o)-> %o', (a, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(unique(a)).toStrictEqual(expected);
  });
});


describe ('flatterWithDepth function', ()=>{
  it.each([
    [[1,[2,2]], 1 ,[1, 2,2]],
    [[1,[2,[3,4,5],6],7,8], 2, [1,2,3,4,5,6,7,8]],
    [[1,[2,3,4,5,6],7,8], 2, [1,2,3,4,5,6,7,8]],
    [[1,2], true, []],
  ])('flatterWithDepth(%o)-> %o', (a, b, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(flattenWithDepth(a, b)).toStrictEqual(expected);
  });
});

describe ('groupBy function', ()=>{
  it.each([
    [[{name: 'John', age: 30}, {name:'Charly', age:32}, {name:'Carl', age:33}], 'age', {
      '30':[{name: 'John', age: 30}],'32':[{name:'Charly', age:32}], '33':[{name:'Carl', age:33}]
    }]])('groupBy(%o, %o)-> %o', (a, b, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(groupBy(a, b)).toStrictEqual(expected);
  });
});