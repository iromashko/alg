function diameterOfBinaryTree(tree) {
  diameter = 0;
  diameterOfBinaryTreeHelper(tree);
  return diameter;
}

function diameterOfBinaryTreeHelper(node) {
  if (!node) return 0;
  let left = diameterOfBinaryTreeHelper(node.left);
  let right = diameterOfBinaryTreeHelper(node.right);
  diameter = Math.max(diameter, left + right);
  return Math.max(left, right) + 1;
}
