export function knapsackProblem(items: number[][], capacity: number) {
  const knapsackValues: number[][] = [];
  for (let i = 0; i <= items.length; i++) {
    const row = new Array(capacity + 1).fill(0);
    knapsackValues.push(row);
  }
  for (let i = 1; i <= items.length; i++) {
    const currentWeight: number = items[i - 1][1];
    const currentValue: number = items[i - 1][0];
    for (let c = 1; c <= capacity; c++) {
      if (currentWeight > c) {
        knapsackValues[i][c] = knapsackValues[i - 1][c];
      } else {
        knapsackValues[i][c] = Math.max(
          knapsackValues[i - 1][c],
          knapsackValues[i - 1][c - currentWeight] + currentValue
        );
      }
    }
  }
  return [
    knapsackValues[items.length][capacity],
    getKnapsackItems(knapsackValues, items),
  ];
}
function getKnapsackItems(knapsackValues: number[][], items: number[][]) {
  let sequence: number[] = [];
  let i = knapsackValues.length - 1;
  let c = knapsackValues[0].length - 1;
  while (i > 0) {
    if (knapsackValues[i][c] === knapsackValues[i - 1][c]) {
      i--;
    } else {
      sequence.unshift(i - 1);
      c -= items[i - 1][1];
      i--;
    }
    if (c === 0) break;
  }
  return sequence;
}
