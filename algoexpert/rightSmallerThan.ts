export function rightSmallerThan(array: number[]) {
  if (!array.length) return [];
  const rightSmallerCounts: number[] = array.slice();
  const lastIdx = array.length - 1;
  const bst = new SpecialBST(array[lastIdx]);
  rightSmallerCounts[0] = 0;
  for (let i = array.length - 2; i >= 0; i--) {
    bst.insert(array[i], i, rightSmallerCounts);
  }
  return rightSmallerCounts;
}
class SpecialBST {
  value: number | null;
  left: SpecialBST | null;
  right: SpecialBST | null;
  leftSubTreeSize: number;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.leftSubTreeSize = 0;
  }
  insert(
    value: number,
    i: number,
    rightSmallerCounts: number[],
    numOfSmallerAtInsertTime: number = 0
  ) {
    if (value < this.value) {
      this.leftSubTreeSize++;
      if (!this.left) {
        this.left = new SpecialBST(value);
        rightSmallerCounts[i] = numOfSmallerAtInsertTime;
      } else {
        this.left.insert(
          value,
          i,
          rightSmallerCounts,
          numOfSmallerAtInsertTime
        );
      }
    } else {
      numOfSmallerAtInsertTime += this.leftSubTreeSize;
      if (value > this.value) numOfSmallerAtInsertTime++;
      if (!this.right) {
        this.right = new SpecialBST(value);
        rightSmallerCounts[i] = numOfSmallerAtInsertTime;
      } else {
        this.right.insert(
          value,
          i,
          rightSmallerCounts,
          numOfSmallerAtInsertTime
        );
      }
    }
  }
}
