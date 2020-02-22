const assert = require('assert');
const unsortedArray = [3, 1, 2];
const sortedArray = [1, 2, 3];

let heapSort = require('./algoexpert/Heap_Sort');
heapSort = require('./sandbox');

console.log('start time');

assert.deepStrictEqual(sortedArray, heapSort(unsortedArray));

console.log('end time');
