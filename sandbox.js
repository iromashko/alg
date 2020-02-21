function invertBinaryTree(tree) {
  if (tree)
    [tree.left, tree.right] = [
      invertBinaryTree(tree.right),
      invertBinaryTree(tree.left)
    ];
  return tree;
}
