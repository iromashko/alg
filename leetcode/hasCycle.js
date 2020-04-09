function hasCycle(head) {
  let first = head;
  let second = head;
  while (first && first.next) {
    first = first.next.next;
    second = second.next;
    if (first === second) return true;
  }
  return false;
}
