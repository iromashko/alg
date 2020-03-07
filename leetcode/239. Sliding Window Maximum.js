function maxSlidingWindow(array, k) {
  const result = [];
  const queue = [];
  for (let i = 0; i < array.length; i++) {
    while (queue.length - 1 >= 0 && array[i] > queue[queue.length - 1])
      queue.pop();
    queue.push(array[i]);
    const j = i + 1 - k;
    if (j >= 0) {
      result.push(queue[0]);
      if (array[j] === queue[0]) queue.shift();
    }
  }
  return result;
}
