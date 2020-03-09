class HashEntry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class HashTable {
  constructor() {
    this.slots = 10;
    this.size = 0;
    this.bucket = new Array(this.slots).fill(null);
    this.threshold = 0.6;
  }
  getSize() {
    return this.size;
  }
  getIndex(key) {
    return key % this.slots;
  }
  isEmpty() {
    return this.getSize() === 0;
  }
  insert(key, value) {
    let bIndex = this.getIndex(key);
    if (!this.bucket[bIndex]) {
      this.bucket[bIndex] = new HashEntry(key, value);
    } else {
      let entry = this.bucket[bIndex];
      while (entry) {
        if (entry.key === key) {
          entry.value = value;
          break;
        } else if (!entry.next) {
          entry.next = new HashEntry(key, value);
          break;
        }
        entry = entry.next;
      }
    }
    this.size++;
    let loadFactor = Number(this.size) / Number(this.slots);
    if (loadFactor >= this.threshold) {
      this.resize();
    }
  }
  search(key) {
    let bIndex = this.getIndex(key);
    let head = this.bucket[bIndex];
    if (head) {
      while (head) {
        if (head.key === key) {
          return head.value;
        }
        head = head.next;
      }
    }
    return null;
  }
  deleteValue(key) {
    let bIndex = this.getIndex(key);
    let head = this.bucket[bIndex];
    if (head.key === key) {
      this.bucket[bIndex] = head.next;
      this.size--;
      return this;
    }
    let prev = null;
    while (head) {
      if (head.key === key) {
        prev.next = head.next;
        this.size--;
        return this;
      }
      prev = head;
      head = head.next;
    }
    return null;
  }
  resize() {
    let newSlots = this.slots * 2;
    let newBucket = [];
    for (let n = 0; n < newSlots; n++) {
      newBucket[n] = null;
    }
    for (let i = 0; i < this.bucket.length; i++) {
      let head = this.bucket[i];
      while (head) {
        let newIndex = this.getIndex(head.key);
        if (!newBucket[newIndex]) {
          newBucket[newIndex] = new HashEntry(head.key, head.value);
        } else {
          let node = newBucket[newIndex];
          while (node) {
            if (node.key === head.key) {
              node.value = head.value;
              node = null;
            } else if (!node.next) {
              node.next = new HashEntry(head.key, head.value);
              node = null;
            } else {
              node = node.next;
            }
          }
        }
        head = head.next;
      }
    }
    this.bucket = newBucket;
    this.slots = newSlots;
  }
}

let table = new HashTable();
console.log(table.isEmpty());
table.insert('This', 1);
table.insert('is', 2);
table.insert('a', 3);
table.insert('Test', 4);
table.insert('Driver', 5);
console.log('Table Size: ' + String(table.getSize()));
console.log("The value for 'is' key: " + String(table.search('is')));
table.deleteValue('is');
table.deleteValue('a');
console.log('Table Size: ' + String(table.getSize()));
console.log(table);
