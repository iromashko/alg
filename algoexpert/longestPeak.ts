export function longestPeak(array: number[]) {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i] > array[i + 1] && array[i] > array[i - 1];
    if (!isPeak) {
      i++;
      continue;
    }
    let left = i - 2;
    while (left >= 0 && array[left] < array[left + 1]) left--;
    let right = i + 2;
    while (right < array.length && array[right] < array[right - 1]) right++;
    const currentLengthPeak = right - left - 1;
    longestPeakLength = Math.max(longestPeakLength, currentLengthPeak);
    i = right;
  }
  return longestPeakLength;
}
