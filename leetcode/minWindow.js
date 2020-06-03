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

function minWindow(str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let substrStart = 0;
  let minLength = str.length + 1;
  let charFrequency = {};
  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) charFrequency[chr] = 0;
    charFrequency[chr] += 1;
  }
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] >= 0) matched += 1;
    }
    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        substrStart = windowStart;
      }
      const leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) matched -= 1;
        charFrequency[leftChar] += 1;
      }
    }
  }
  if (minLength > str.length) return '';
  return str.substring(substrStart, substrStart + minLength);
}

function minWindow(string, pattern) {
  let result = '';
  let map = {};
  pattern.split('').forEach((ch) => (map[ch] = (map[ch] || 0) + 1));
  let count = Object.keys(map).length;
  let l = 0;
  let r = -1;
  while (r < string.length) {
    if (count === 0) {
      if (!result || r - l + 1 < result.length) result = string.slice(l, r + 1);
      if (map[string[l]] !== undefined) map[string[l]]++;
      if (map[string[l]] > 0) count++;
      l++;
    } else {
      r++;
      if (map[string[r]] !== undefined) map[string[r]]--;
      if (map[string[r]] === 0) count--;
    }
  }
  return result;
}
