function levelOrder(root) {
  let result = [];
  levelOrderHelper(root, 0, result);
  return result;
}
function levelOrderHelper(node, level, result) {
  if (!node) return;
  if (!result[level]) result[level] = [];
  result[level].push(node.val);
  levelOrderHelper(node.left, level + 1, result);
  levelOrderHelper(node.right, level + 1, result);
}
