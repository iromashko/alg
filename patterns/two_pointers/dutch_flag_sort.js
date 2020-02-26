function dutch_flag_sort(arr) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;
  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
      i += 1;
      low += 1;
    } else if (arr[i] === 1) {
      i += 1;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high -= 1;
    }
  }
}

let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);
