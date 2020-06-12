import { BinaryTree } from '../BinaryTree';

export function iterativeInOrderTraversal(
  tree: BinaryTree,
  cb: (node: BinaryTree) => void
) {
  let previousNode: BinaryTree | null = null;
  let currentNode: BinaryTree | null = tree;
  while (currentNode) {
    let nextNode;
    if (!previousNode || previousNode === currentNode.parent) {
      if (currentNode.left) {
        nextNode = currentNode.left;
      } else {
        cb(currentNode);
        nextNode = currentNode.right || currentNode.parent;
      }
    } else if (previousNode === currentNode.left) {
      cb(currentNode);
      nextNode = currentNode.right || currentNode.parent;
    } else {
      nextNode = currentNode.parent;
    }
    previousNode = currentNode;
    currentNode = nextNode;
  }
}
