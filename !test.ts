export function mergeArrays(
  arr1: Array<number>,
  arr2: Array<number>
): Array<number> {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    merged.concat(arr1);
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    merged.concat(arr2);
  }

  return merged;
}
console.log(mergeArrays([4, 5, 6], [-2, -1, 0, 7]));
