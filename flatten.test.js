const flatten = require("./index.js");

test("Empty array", () => {
  const input = [];
  const result = flatten(input);
  const expected = [];
  expect(result).toEqual(expected);
});

test("Passing an flattened array as parameter", () => {
  const input = [1, 2];
  const result = flatten(input);
  const expected = [1, 2];
  expect(result).toEqual(expected);
});

test("Nested array (depth 1)", () => {
  const input = [1, 2, [3]];
  const result = flatten(input);
  const expected = [1, 2, 3];
  expect(result).toEqual(expected);
});

test("Nested array (depth 2)", () => {
  const input = [1, 2, [3, [4]]];
  const result = flatten(input);
  const expected = [1, 2, 3, 4];
  expect(result).toEqual(expected);
});

test("Nested array (big depth)", () => {
  const input = [[[[[[[[[[[[[[[[8]]]]]]]]]]]]]]]];
  const result = flatten(input);
  const expected = [8];
  expect(result).toEqual(expected);
});

test("Nested array with multiple nested items", () => {
  const input = [[1], [2], [3], [4]];
  const result = flatten(input);
  const expected = [1, 2, 3, 4];
  expect(result).toEqual(expected);
});

test("Throws an exception when the parameter passed is not an array", () => {
  const parameters = [
    33,
    "A",
    { foo: "bar" },
    null,
    undefined,
    new Map(),
    true
  ];

  parameters.forEach(parameter => {
    expect(() => {
      flatten(parameter);
    }).toThrow();
  });
});

test("Throws an exception when the function is called without arguments", () => {
  expect(() => {
    flatten();
  }).toThrow();
});
