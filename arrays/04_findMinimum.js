function findMinimum(array) {
  var currentMin = array[0];
  for (let element of array) {
    if (element < currentMin) currentMin = element;
  }
  return currentMin;
}

console.log(findMinimum([9, 2, 3, 6]));
