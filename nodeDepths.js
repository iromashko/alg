function nodeDepths(tree, depth = 0) {
    if (!tree) return 0;
    return (
        depth + nodeDepths(tree.left, depth + 1) + nodeDepths(tree.right, depth + 1)
    );
}
