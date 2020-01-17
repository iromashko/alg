function toLowerCase(string) {
  const DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);

  return Array.from(string)
    .map(char =>
      char >= 'A' && char <= 'Z'
        ? String.fromCharCode(char.charCodeAt(0) + DIFF)
        : char
    )
    .join('');
}
