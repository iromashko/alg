function isSymmetric(tree) {
  if (!tree) return true;
  return isMirror(tree.left, tree.right);
}
function isMirror(left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
