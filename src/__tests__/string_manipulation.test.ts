import { describe, expect, it } from 'vitest';
import { camelCase, kebabCase, truncateString, capitalize } from '../stringManipulation/stringManipulation';

describe ('kebabCase function', ()=>{
  it.each([
    ['string manipulation functions','string-manipulation-functions'],
    ['STRING manipulation functions', 'string-manipulation-functions'],
    ['   STRING manipulation functions', 'string-manipulation-functions'],
    ['STRING-manipulation functions', 'string-manipulation-functions'],
    ['-String-Manipulation-', 'string-manipulation']
  ])('kebabCase(%s)-> %s', (a, expected)=>{
    expect(kebabCase(a)).toStrictEqual(expected);
  });
});

describe ('camelCase function', ()=>{
  it.each([
    ['string manipulation functions','stringManipulationFunctions'],
    ['STRING manipulation functions', 'stringManipulationFunctions'],
    ['   STRING manipulation functions', 'stringManipulationFunctions'],
    ['STRING-manipulation functions', 'stringManipulationFunctions'],
  ])('camelCase(%s)-> %s', (a, expected)=>{
    expect(camelCase(a)).toStrictEqual(expected);
  });
});

describe ('capitalize function', ()=>{
  it.each([
    ['string manipulation functions','String Manipulation Functions'],
    ['STRING manipulation functions', 'String Manipulation Functions'],
    ['   STRING manipulation functions', 'String Manipulation Functions'],
    ['STRING-manipulation functions', 'String Manipulation Functions'],
  ])('capitalize(%s)-> %s', (a, expected)=>{
    expect(capitalize(a)).toStrictEqual(expected);
  });
});

describe ('truncateString function', ()=>{
  it.each([
    ['string manipulation functions', 10,'string man...'],
    ['STRING manipulation functions', 60 ,'STRING manipulation functions'],
    ['STRING-manipulation functions', 5,'STRIN...'],
    ['STRIN', 5,'STRIN'],
  ])('truncateString(%s, %n)-> %s', (a, b, expected)=>{
    expect(truncateString(a, b)).toStrictEqual(expected);
  });
});
