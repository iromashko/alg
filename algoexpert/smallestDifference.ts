export function smallestDifference(arr1: number[], arr2: number[]) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let smallestPair: [number, number] = [Infinity, Infinity];
  let i = 0;
  let j = 0;
  let smallest = Infinity;
  let current = Infinity;
  while (i < arr1.length && j < arr2.length) {
    let first = arr1[i];
    let second = arr2[j];
    if (first < second) {
      current = second - first;
      i++;
    } else if (first > second) {
      current = first - second;
      j++;
    } else {
      return [first, second];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
}
