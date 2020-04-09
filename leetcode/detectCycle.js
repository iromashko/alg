function detectCycle(head) {
  if (!head || !head.next || !head.next.next) return null;
  let first = head.next;
  let second = head.next.next;
  while (second !== first) {
    if (!second.next || !second.next.next) return null;
    first = first.next;
    second = second.next.next;
  }
  first = head;
  while (second !== first) {
    first = first.next;
    second = second.next;
  }
  return first;
}
