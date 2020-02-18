class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    var qElement = new QElement(element, priority);
    var contain = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }
  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[0];
  }
  rear() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printPQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i].element + ' ';
    return str;
  }
}

var priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());
console.log(priorityQueue.front());
priorityQueue.enqueue('Sumit', 2);
priorityQueue.enqueue('Gourav', 1);
priorityQueue.enqueue('Piyush', 1);
priorityQueue.enqueue('Sunny', 2);
priorityQueue.enqueue('Sheru', 3);
console.log(priorityQueue.printPQueue());
console.log(priorityQueue.front().element);
console.log(priorityQueue.rear().element);
console.log(priorityQueue.dequeue().element);
priorityQueue.enqueue('Sunil', 2);
console.log(priorityQueue.printPQueue());
