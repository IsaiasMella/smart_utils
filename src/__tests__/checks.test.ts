import { describe, it } from 'vitest';
import { isArray } from '../checks/isArray';
import { isEmpty } from '../checks/isEmpty';

describe ('isArray function', ()=>{
  it.each([
    ['', false],
    [{}, false]
  ])('isArray(%d)-> %o', (a, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(isArray(a)).toStrictEqual(expected);
  });
});

describe ('isEmpty function', ()=>{
  it.each([
    [null, true],
    [undefined, true],
    ['', true],
    [{}, true],
    [[1], false]
  ])('isEmpty(%d)-> %o', (a, expected)=>{
    //@ts-expect-error We need to check all cases of arguments
    expect(isEmpty(a)).toStrictEqual(expected);
  });
});

