/**
 * This is a function.
 *
 * @param {Array} arr Array to be flattened
 * @return {Array} Flattened array
 *
 * @example
 *
 *     flatten([1, [2, [3, [4] ] ] ])
 *     // => [1, 2, 3, 4]
 */
function flatten(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument is not an array");
  }

  const reduceFn = (acc, value) =>
    acc.concat(Array.isArray(value) ? flatten(value) : value);

  return arr.reduce(reduceFn, []);
}

module.exports = flatten;
