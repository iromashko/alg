const cache = new WeakMap();
function countOwnKeys(obj) {
  if (cache.has(obj)) {
    console.log(cache.get(obj), 'cached');
  } else {
    const count = Object.keys(obj).length;
    cache.set(obj, count);
    console.log(count, 'computed');
  }
}
const obj = { foo: 1, bar: 2 };
countOwnKeys(obj);
countOwnKeys(obj);
