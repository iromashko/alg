function rightSmallerThan(array) {
  const rightSmallerCounts = [];
  for (let i = 0; i < array.length; i++) {
    let rightSmallerCount = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) rightSmallerCount++;
    }
    rightSmallerCounts.push(rightSmallerCount);
  }
  return rightSmallerCounts;
}
