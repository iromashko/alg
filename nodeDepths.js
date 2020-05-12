function nodeDepths(tree, count = 0) {
    if (!tree) return count;
    count++;
    let left = nodeDepths(tree.left, count);
    let right = nodeDepths(tree.right, count);
    return left + right;
}
