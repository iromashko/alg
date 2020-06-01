function shiftLinkedList(head, k) {
  let listLength = 1;
  let listTail = head;
  while (listTail.next) {
    listTail = listTail.next;
    listLength++;
  }
  const offset = Math.abs(k) % listLength;
  if (offset === 0) return head;
  const newTailPosition = k > 0 ? listLength - offset : offset;
  let newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;
  return newHead;
}
