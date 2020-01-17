function rangeSumBST(tree, left, right) {
  if (!tree) return 0;
  if (tree.val > right) {
    return rangeSumBST(tree.left, left, right);
  } else if (tree.val < left) {
    return rangeSumBST(tree.right, left, right);
  } else {
    return (
      tree.val +
      rangeSumBST(tree.left, left, right) +
      rangeSumBST(tree.right, left, right)
    );
  }
}
