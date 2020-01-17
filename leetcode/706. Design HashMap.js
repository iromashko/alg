class MyHashMap {
  constructor() {
    this.mySet = Array.from({ length: 1000 }, x => []);
    this.mapFn = function(key) {
      return key % 1000;
    };
  }
  put(key, value) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if (index === -1) arr.push(key, '' + value);
    else arr.splice(index + 1, 1, '' + value);
  }
  get(key) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if (index !== -1) return +arr[index + 1];
    return -1;
  }
  remove(key) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if (index !== -1) arr.splice(index, 2);
  }
}
