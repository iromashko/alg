function findProduct(array) {
  let left = 1;
  let product = [];
  for (let element of array) {
    product.push(left);
    left = left * element;
  }
  let right = 1;
  for (var i = array.length - 1; i > -1; i--) {
    product[i] *= right;
    right *= array[i];
  }
  return product;
}

console.log(findProduct([0, 1, 2, 3, 4, 5]));
