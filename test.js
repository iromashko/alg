function findFirstUnique(arr) {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in counts) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (counts[arr[i]] == 1) return arr[i];
  }

  return null;
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6, 9, 0, 3]));
