function breadthFirstSearch(array) {
  const queue = [this];
  while (queue.length > 0) {
    const current = queue.shift();
    array.push(current.name);
    for (const child of current.children) {
      queue.push(child);
    }
  }
  return array;
}
