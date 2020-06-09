export function largestRange(array: number[]) {
  const nums: { [key: number]: boolean } = {};
  let longestLength: number = 0;
  let bestRange: [number, number] = [-1, -1];
  for (const num of array) {
    nums[num] = true;
  }
  for (const num of array) {
    if (!nums[num]) continue;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}
