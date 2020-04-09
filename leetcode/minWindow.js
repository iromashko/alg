function minWindow(s, t) {
  let length;
  let slow = 0;
  let counter = t.length;
  let table = {};
  let minString = '';
  for (c of t) {
    table[c] = !table[c] ? 1 : table[c] + 1;
  }
  for (let fast = 0; fast < s.length; fast++) {
    if (s[fast] in table) {
      if (table[s[fast]] > 0) {
        counter -= 1;
      }
      table[s[fast]] -= 1;
    }
    while (counter === 0) {
      if (!length || length > fast - slow + 1) {
        length = fast - slow + 1;
        minString = s.slice(slow, fast + 1);
      }
      if (s[slow] in table) {
        table[s[slow]] += 1;
        if (table[s[slow]] > 0) {
          counter += 1;
        }
      }
      slow += 1;
    }
  }
  return minString;
}
