/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let trimmedStr = '';
  let currentChar = '';
  let currentCount = 0;

  if (size === undefined) return string;

  for (const char of string) {
    if (char !== currentChar) {
      currentChar = char;
      currentCount = 1;
    } else {
      currentCount++;
    }

    if (currentCount <= size) {
      trimmedStr += char;
    }
  }

  return trimmedStr;
}
