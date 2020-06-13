import { BinaryTree } from '../BinaryTree';

export function rightSiblingTree(tree: BinaryTree) {
  mutate(tree, null, null);
  return tree;
}
function mutate(
  node: BinaryTree | null,
  parent: BinaryTree | null,
  isLeftSide: boolean | null
) {
  if (!node) return;
  const { left, right } = node;
  mutate(left, node, true);
  if (!parent) {
    node.right = null;
  } else if (isLeftSide) {
    node.right = parent.right;
  } else {
    if (!parent.right) {
      node.right = null;
    } else {
      node.right = parent.right.left;
    }
  }
  mutate(right, node, false);
}
