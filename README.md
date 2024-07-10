# Smart Utils 🔧

A utility library for various common operations.

## Features

- **Array Manipulation**
  - `chunk`: Splits an array into subarrays of a specific size.
  - `unique`: Removes duplicate elements from an array.
  - `flatten`: Flattens an array of arrays into a single level.
  - `groupBy`: Groups elements of an array by a specific property.

- **Object Manipulation**
  - `deepClone`: Performs a deep clone of an object.
  - `merge`: Merges two or more objects into one.
  - `get`: Safely accesses nested properties of an object.
  - `omit`: Creates a copy of an object omitting some specific properties.

- **String Manipulation**
  - `kebabCase`: Converts a string to kebab-case.
  - `camelCase`: Converts a string to camelCase.
  - `capitalize`: Capitalizes the first letter of a string.
  - `truncate`: Truncates a string to a specific length and adds ellipsis if needed.

- **Number Manipulation**
  - `isEven`: Checks if a number is even.
  - `sum`: Sums an array of numbers.
  - `percentage`: Calculates the percentage.

- **Function Utilities**
  - `debounce`: Creates a function that will not be executed until after a specific delay.
  - `throttle`: Creates a function that will only be executed once in a specific time interval.
  - `memoize`: Optimizes functions that perform expensive calculations by caching the results.

- **Promise Utilities**
  - `delay`: Creates a promise that resolves after a specific delay.
  - `retry`: Retries a promise-returning function a specific number of times if it fails.
  - `timeout`: Sets a time limit for a promise and rejects it if it does not resolve within that time.

- **Browser Utilities**
  - `getQueryParams`: Gets the query parameters from the current URL.
  - `setCookie`: Sets a cookie in the browser.
  - `getCookie`: Gets the value of a cookie from the browser.

## Installation

You can install this library using npm:

```bash
npm install smart_utils
```

## Usage
Here is an example of how to use the flattenWithDepth function:

```bash
import { flattenWithDepth } from 'smart_utils';

const array = [1, [2, [3, [4]], 5]];
const depth = 2;
const result = flattenWithDepth(array, depth);
console.log(result); // Output: [1, 2, 3, [4], 5]
```

## API

### Array Manipulation

- **`chunk(array, size)`**
  - Splits an array into subarrays of a specific size.
- **`unique(array)`**
  - Removes duplicate elements from an array.
- **`flatten(array)`**
  - Flattens an array of arrays into a single level.
- **`groupBy(array, property)`**
  - Groups elements of an array by a specific property.

### Object Manipulation

- **`deepClone(object)`**
  - Performs a deep clone of an object.
- **`merge(...objects)`**
  - Merges two or more objects into one.
- **`get(object, path)`**
  - Safely accesses nested properties of an object.
- **`omit(object, ...keys)`**
  - Creates a copy of an object omitting some specific properties.

### String Manipulation

- **`kebabCase(string)`**
  - Converts a string to kebab-case.
- **`camelCase(string)`**
  - Converts a string to camelCase.
- **`capitalize(string)`**
  - Capitalizes the first letter of a string.
- **`truncate(string, length)`**
  - Truncates a string to a specific length and adds ellipsis if needed.

### Number Manipulation

- **`isEven(number)`**
  - Checks if a number is even.
- **`sum(array)`**
  - Sums an array of numbers.
- **`percentage(part, whole)`**
  - Calculates the percentage.

### Function Utilities

- **`debounce(func, delay)`**
  - Creates a function that will not be executed until after a specific delay.
- **`throttle(func, interval)`**
  - Creates a function that will only be executed once in a specific time interval.
- **`memoize(func)`**
  - Optimizes functions that perform expensive calculations by caching the results.

### Promise Utilities

- **`delay(ms)`**
  - Creates a promise that resolves after a specific delay.
- **`retry(func, retries)`**
  - Retries a promise-returning function a specific number of times if it fails.
- **`timeout(promise, ms)`**
  - Sets a time limit for a promise and rejects it if it does not resolve within that time.

### Browser Utilities

- **`getQueryParams()`**
  - Gets the query parameters from the current URL.
- **`setCookie(name, value, options)`**
  - Sets a cookie in the browser.
- **`getCookie(name)`**
  - Gets the value of a cookie from the browser.

## Contribution

We welcome contributions! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Authors

- **[Isaias Mella](https://github.com/IsaiasMella/IsaiasMella)**
- **[Sofia Inchausti](https://github.com/SofiaInchausti)**

