const clone = items =>
  items.map(item => (Array.isArray(item) ? clone(item) : item));

const cloneObj = obj =>
  Object.getPrototypeOf(obj) !== Object.prototype
    ? obj
    : Object.keys(obj).reduce(
        (acc, key) => ((acc[key] = clone(obj[key])), acc),
        {}
      );

var nestedArray = [1, [2], 3];
var arrayCopy = clone(nestedArray);
// Make some changes
arrayCopy[0] = '?'; // change shallow element
arrayCopy[1][0] = '?'; // change nested element
console.log(arrayCopy); // [ '?', [ '?' ], 3 ]
// ✅ Nested array NOT affected
console.log(nestedArray); //  1, [ 2 ], 3 ]
