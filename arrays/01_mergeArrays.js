function mergeArrays(array1, array2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      merged.push(array1[i]);
      i++;
    } else {
      merged.push(array2[j]);
      j++;
    }
  }
  if (i <= array1.length - 1) {
    array1.splice(0, i);
    merged = merged.concat(array1);
  } else if (j <= array2.length - 1) {
    array2.splice(0, j);
    merged = merged.concat(array2);
  }
  return merged;
}

console.log(mergeArrays([4, 5, 6], [-2, -1, 0, 7]));
