type Range = [number, number];

export function searchForRange(array: number[], target: number) {
  const finalRange: Range = [-1, -1];
  alternateBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alternateBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}
function alternateBinarySearch(
  array: number[],
  target: number,
  left: number,
  right: number,
  finalRange: Range,
  goLeft: boolean
) {
  while (left <= right) {
    const middleIdx = Math.floor((left + right) / 2);
    if (array[middleIdx] > target) {
      right = middleIdx - 1;
    } else if (array[middleIdx] < target) {
      left = middleIdx + 1;
    } else {
      if (goLeft) {
        if (middleIdx === 0 || array[middleIdx - 1] !== target) {
          finalRange[0] = middleIdx;
          return;
        } else {
          right = middleIdx - 1;
        }
      } else {
        if (middleIdx === array.length - 1 || array[middleIdx + 1] !== target) {
          finalRange[1] = middleIdx;
          return;
        } else {
          left = middleIdx + 1;
        }
      }
    }
  }
}
