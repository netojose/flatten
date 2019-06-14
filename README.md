# Flatten function

##

This function flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].

## Usage

```js
const flatten = require("./index.js");
flatten([1, [2, [3, [4]]]]);
// => [1, 2, 3, 4]
```

## Tests

```bash
npm test
```

![Jest tests](https://image.prntscr.com/image/6OkTd7KKTgSZqqoq6eLqPA.png "Jest tests")
