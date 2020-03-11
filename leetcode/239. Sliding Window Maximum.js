// #maxSlidingWindow
//   - input: Array, windowSize: Number
//   - output: Array

// result = []
// queue = []
// for each number in array
//   - while number larger last queue
//     - remove last queue
//   - add number to queue
// if windowSize >= 0
//   - add first queue to result
//   if windowStart = first queue
//     - remove windowStart

function maxSlidingWindow(array, k) {
  const result = [];
  const queue = [];
  for (let i = 0; i < array.length; i++) {
    while (queue.length && array[i] > queue[queue.length - 1]) queue.pop();
    queue.push(array[i]);
    const j = i + 1 - k;
    if (j >= 0) {
      result.push(queue[0]);
      if (array[j] === queue[0]) queue.shift();
    }
  }
  return result;
}
