class LinkedList {
  value: number;
  next: LinkedList | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
  let p1prev: LinkedList | null = null;
  let p1: LinkedList | null = headOne;
  let p2: LinkedList | null = headTwo;
  while (p1 && p2) {
    if (p1.value < p2.value) {
      p1prev = p1;
      p1 = p1.next;
    } else {
      if (p1prev) p1prev.next = p2;
      p1prev = p2;
      p2 = p2.next;
      p1prev.next = p1;
    }
  }
  if (!p1) p1prev!.next = p2;
  return headOne.value < headTwo.value ? headOne : headTwo;
}
