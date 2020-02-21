function invertBinaryTree(tree) {
  if (tree)
    [tree.left, tree.right] = [
      invertBinaryTree(tree.right),
      invertBinaryTree(tree.left)
    ];
  return tree;
}

// function invertBinaryTree(tree) {
//   if (!tree) return;
//   swapLeftAndRight(tree);
//   invertBinaryTree(tree.left);
//   invertBinaryTree(tree.right);
// }

// function swapLeftAndRight(tree) {
//   const left = tree.left;
//   tree.left = tree.right;
//   tree.right = left;
// }
