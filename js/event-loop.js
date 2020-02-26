function main() {
  console.log(`a`);
  setTimeout(() => console.log(`b`), 0);
  runWhileLoopForNSeconds(3);
  console.log(`c`);
}
main();
function runWhileLoopForNSeconds(sec) {
  let start = Date.now();
  let now = start;
  while (now - start < sec * 1000) now = Date.now();
}
