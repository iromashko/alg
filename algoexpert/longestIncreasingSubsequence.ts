export function longestIncreasingSubsequence(array: number[]) {
  const sequences: number[] = new Array(array.length);
  const indices: number[] = new Array(array.length + 1);
  let length: number = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const newLength = binarySearch(1, length, indices, array, num);
    sequences[i] = indices[newLength - 1];
    indices[newLength] = i;
    length = Math.max(length, newLength);
  }
  return buildSequence(array, sequences, indices[length]);
}
export function binarySearch(
  startIdx: number,
  endIdx: number,
  indices: number[],
  array: number[],
  num: number
): number {
  if (startIdx > endIdx) return startIdx;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  if (array[indices[middleIdx]] < num) {
    startIdx = middleIdx + 1;
  } else {
    endIdx = middleIdx - 1;
  }
  return binarySearch(startIdx, endIdx, indices, array, num);
}
export function buildSequence(
  array: number[],
  sequences: number[],
  currentIdx: number
): number[] {
  const sequence: number[] = [];
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
}
