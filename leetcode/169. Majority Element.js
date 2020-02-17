function majorityElement(array) {
  let el = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (count === 0) {
      el = i;
      count++;
    } else {
      if (array[el] === array[i]) {
        count++;
      } else {
        count--;
      }
    }
  }

  return array[el];
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
