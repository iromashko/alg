function* idCreator() {
  let i = 0;
  while (true) yield i++;
}

const idx = idCreator();

console.log(idx.next());
console.log(idx.next());
console.log(idx.next().value);
console.log(idx.next().value);
