const myObj = {
  name: 'name',
  job: 'job',
  age: 11
};

myObj[Symbol.iterator] = function*() {
  for (const prop in this) {
    yield this[prop];
  }
};

console.log([...myObj]); // > ["name", "job", 11]
for (const val of myObj) {
  console.log(val);
}
