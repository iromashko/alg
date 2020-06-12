class LinkedList {
  value: number;
  next: LinkedList | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function shiftLinkedList(head: LinkedList, k: number) {
  let length = 1;
  let listTail: LinkedList = head;
  while (listTail.next) {
    listTail = listTail.next;
    length++;
  }
  const offset = Math.abs(k) % length;
  if (offset === 0) return head;
  const newTailPosition = k > 0 ? length - offset : offset;
  let newTail: LinkedList | null = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail!.next;
  }
  const newHead = newTail!.next;
  newTail!.next = null;
  listTail.next = head;
  return newHead;
}
