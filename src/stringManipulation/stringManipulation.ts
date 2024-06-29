export const kebabCase = (str: string) => {
  return str
    .trim() // Remove whitespace from the beginning and end
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/[^a-z0-9]+/g, '-') // Replace spaces and non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ''); // Remove extra hyphens from the beginning and end
};

export const camelCase = (str: string) => {
  // Remove leading and trailing whitespace and replace spaces, dashes, or underscores with spaces
  const words = str
    .trim()
    .replace(/[\s-_]+/g, ' ')
    .split(' ');

  // Convert all words to lowercase and capitalize the first letter of each word except the first
  const camelCaseString = words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  return camelCaseString;
};

export const capitalize = (str: string) => {
  const lowerCaseStr = str.trim().toLowerCase().replace('-', ' ');
  return lowerCaseStr.replace(/(?:^|\s)\S/g, function (match) {
    return match.toUpperCase();
  });
  //Use a regular expression to find each letter that is not preceded by a space
  // at the beginning of the string or after a space, and convert it to uppercase
};

export const truncateString = (str: string, maxLength: number) => {
  // Check if the string length is greater than the maximum length
  if (str.length > maxLength) {
    // Truncate the string to the maximum length and add ellipses
    return str.substring(0, maxLength) + '...';
  } else {
    // If the string is already shorter than or equal to the maximum length, return it as is
    return str;
  }
};
