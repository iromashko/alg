function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map((value) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}
function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvisitedNeghbors = getUnvisitedNeghbors(i, j, matrix, visited);
    for (const neghbor of unvisitedNeghbors) {
      nodesToExplore.push(neghbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}
function getUnvisitedNeghbors(i, j, matrix, visited) {
  const unvisitedNeghbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeghbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeghbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeghbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeghbors.push([i, j + 1]);
  return unvisitedNeghbors;
}
