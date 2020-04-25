function interweavingStrings(one, two, three) {
  if (three.length !== one.length + two.length) return false;
  return areInterwoven(one, two, three, 0, 0);
}
function areInterwoven(one, two, three, i, j) {
  const k = i + j;
  if (k === three.length) return true;
  if (i < one.length && one[i] === three[k]) {
    if (areInterwoven(one, two, three, i + 1, j)) return true;
  }
  if (j < two.length && two[j] === three[k])
    return areInterwoven(one, two, three, i, j + 1);
  return false;
}
