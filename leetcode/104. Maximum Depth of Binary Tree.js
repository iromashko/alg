function maxDepth(root, count = 0) {
  if (!root) return count;
  count++;
  let left = maxDepth(root.left, count);
  let right = maxDepth(root.right, count);
  return left > right ? left : right;
}
