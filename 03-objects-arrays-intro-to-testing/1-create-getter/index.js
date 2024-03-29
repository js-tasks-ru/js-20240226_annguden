/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const properties = path.split('.');

  return function(obj) {
    let value = obj;
    for (const property of properties) {
      if (value?.hasOwnProperty(property)) {
        value = value[property];
      } else  {
        return;
      }
    }
    return value;
  }
}
