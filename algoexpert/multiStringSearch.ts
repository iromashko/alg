interface ContainedStrings {
  [key: string]: boolean;
}
interface TrieNode {
  [key: string]: TrieNode | string;
}

export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const trie = new Trie();
  for (const string of smallStrings) {
    trie.insert(string);
  }
  const containedStrings: ContainedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedStrings);
  }
  return smallStrings.map((string) => string in containedStrings);
}
function findSmallStringsIn(
  string: string,
  idx: number,
  trie: Trie,
  containedStrings: ContainedStrings
) {
  let currentNode = trie.root;
  for (let i = idx; i < string.length; i++) {
    const currentChar = string[i];
    if (!(currentChar in currentNode)) break;
    currentNode = currentNode[currentChar] as TrieNode;
    if (trie.endSymbol in currentNode)
      containedStrings[currentNode[trie.endSymbol] as string] = true;
  }
}

class Trie {
  root: TrieNode;
  endSymbol: string;
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  insert(string: string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in current)) current[string[i]] = {};
      current = current[string[i]] as TrieNode;
    }
    current[this.endSymbol] = string;
  }
}
