import { beforeAll, describe, expect, it } from 'vitest';
import { getCookie, getQueryParams, setCookies } from '../browserUtilities/browserUtilities';


describe('getQueryParams', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: '?name=John&age=30',
      },
      writable: true,
    });
  });

  it('should parse query parameters correctly', () => {
    const params = getQueryParams();
    expect(params).toEqual({
      name: 'John',
      age: '30',
    });
  });

  describe('setCookies', () => {
    it('should set a cookie with the given name and value', () => {
      setCookies('username', 'JohnDoe');
      expect(document.cookie).toContain('username=JohnDoe');
    });

    it('should set a cookie with the correct expiration date', () => {
      const days = 7;
      const now = new Date();
      now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000));
      const expectedExpires = now.toUTCString();
      setCookies('token', '12345', days);
      expect(document.cookie).toContain(`expires=${expectedExpires}`);
    });
    it('should set a cookie with path=/ by default', () => {
      setCookies('session', 'abcdef');
      expect(document.cookie).toContain('path=/');
    });
    it('should set a cookie with empty value if value is not provided', () => {
      setCookies('emptyValue', '');
      expect(document.cookie).toContain('emptyValue=');
    });
  });
});

describe('getCookie', () => {

  it('should return the value of the specified cookie', () => {
    document.cookie = 'username=JohnDoe';
    const result = getCookie('username');
    expect(result).toBe('JohnDoe');
  });

  it('should return null if the specified cookie does not exist', () => {
    document.cookie = 'username=JohnDoe';
    const result = getCookie('token');
    expect(result).toBeNull();
  });

  it('should return the value of the cookie even if there are multiple cookies', () => {
    document.cookie = 'username=JohnDoe; token=12345; session=abcdef';
    const result = getCookie('token');
    expect(result).toBe('12345');
  });

  it('should handle cookies with no value', () => {
    document.cookie = 'username=';
    const result = getCookie('username');
    expect(result).toBe('');
  });

  it('should handle cookies with special characters in the value', () => {
    document.cookie = 'username=John%20Doe';
    const result = getCookie('username');
    expect(result).toBe('John%20Doe');
  });
});

