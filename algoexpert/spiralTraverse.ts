export function spiralTraverse(array: number[][]) {
  const result: number[] = [];
  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
  return result;
}
function spiralFill(
  array: number[][],
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number,
  result: number[]
) {
  if (rowStart > rowEnd || colStart > colEnd) return;
  for (let col = colStart; col <= colEnd; col++) {
    result.push(array[rowStart][col]);
  }
  for (let row = rowStart + 1; row <= rowEnd; row++) {
    result.push(array[row][colEnd]);
  }
  for (let col = colEnd - 1; col >= colStart; col--) {
    if (rowStart === rowEnd) break;
    result.push(array[rowEnd][col]);
  }
  for (let row = rowEnd - 1; row >= rowStart + 1; row--) {
    if (colStart === colEnd) break;
    result.push(array[row][colStart]);
  }
  spiralFill(array, rowStart + 1, rowEnd - 1, colStart + 1, colEnd - 1, result);
}
