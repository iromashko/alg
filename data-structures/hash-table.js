class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.value = data;
    this.next = null;
  }
}

class HashTable {
  constructor() {
    this.slots = 10;
    this.size = 0;
    this.bucket = [];
    for (var i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
    this.threshold = 0.6;
  }
  get_size() {
    return this.size;
  }
  getIndex(key) {
    let index = key % this.slots;
    return index;
  }
  isEmpty() {
    return this.get_size() == 0;
  }

  insert(key, value) {
    let b_Index = this.getIndex(key);
    if (!this.bucket[b_Index]) {
      this.bucket[b_Index] = new HashEntry(key, value);
      console.log(String(key) + ', ' + String(value) + ' - inserted.');
    } else {
      let head = this.bucket[b_Index];
      while (head) {
        if (head.key == key) {
          head.value = value;
          break;
        } else if (!head.next) {
          head.next = new HashEntry(key, value);
          console.log(String(key) + ', ' + String(value) + ' - inserted.');
          break;
        }
        head = head.next;
      }
    }

    this.size += 1;
    let load_factor = Number(this.size) / Number(this.slots);
    if (load_factor >= this.threshold) {
      this.resize();
    }
  }

  search(key) {
    let b_Index = this.getIndex(key);
    let head = this.bucket[b_Index];
    if (head) {
      while (head) {
        if (head.key == key) {
          return head.value;
        }
        head = head.next;
      }
    }
    console.log('Key not found');
    return null;
  }

  deleteVal(key) {
    let b_Index = this.getIndex(key);
    let head = this.bucket[b_Index];
    if (head.key == key) {
      this.bucket[b_Index] = head.next;
      console.log('Key deleted');
      this.size -= 1;
      return this;
    }
    let prev = null;
    while (head) {
      if (head.key == key) {
        prev.next = head.next;
        console.log('Key deleted');
        this.size -= 1;
        return this;
      }
      prev = head;
      head = head.next;
    }
    console.log('Key not found');
    return null;
  }

  resize() {
    let new_slots = this.slots * 2;
    let new_bucket = [];
    for (var n = 0; n < new_slots; n++) {
      new_bucket[n] = null;
    }
    for (var i = 0; i < this.bucket.length; i++) {
      let head = this.bucket[i];
      while (head) {
        let new_index = this.getIndex(head.key);
        if (!new_bucket[new_index]) {
          new_bucket[new_index] = new HashEntry(head.key, head.value);
        } else {
          let node = new_bucket[new_index];
          while (node) {
            if (node.key == head.key) {
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
    this.bucket = new_bucket;
    this.slots = new_slots;
  }
}

let table = new HashTable();
console.log(table.isEmpty());
table.insert('This', 1);
table.insert('is', 2);
table.insert('a', 3);
table.insert('Test', 4);
table.insert('Driver', 5);
console.log('Table Size: ' + String(table.get_size()));
console.log("The value for 'is' key: " + String(table.search('is')));
table.deleteVal('is');
table.deleteVal('a');
console.log('Table Size: ' + String(table.get_size()));
