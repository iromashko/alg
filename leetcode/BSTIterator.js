function BSTIterator(tree) {
  var stack = [];
  return { hasNext, next };

  function hasNext() {
    return tree || stack.length;
  }

  function next() {
    while (tree) {
      stack.push(tree);
      tree = tree.left;
    }
    tree = stack.pop();
    var result = tree.val;
    tree = tree.right;
    return result;
  }
}
