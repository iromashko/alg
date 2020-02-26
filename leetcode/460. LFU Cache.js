class LFUCache {
  constructor(capacity) {
    this.keyMap = new Map();
    this.freqMap = new Map();
    this.size = capacity;
    this.minFreq = 1;
  }
  get(key) {
    const result = this.getNode(key);
    return result ? result.value : -1;
  }
  getNode(key) {
    const node = this.keyMap.get(key);
    if (node) {
      result = node.value;
      let freq = this.freqMap.get(node.freq);
      freq.delete(node.key);
      if (freq.size === 0) {
        this.freqMap.delete(node.freq);
        if (this.minFreq === node.freq) this.minFreq++;
      }
      node.freq++;
      freq = this.freqMap.get(node.freq);
      if (freq) {
        freq.set(node.key, node);
      } else {
        this.freqMap.set(node.freq, new Map([[node.key, node]]));
      }
    }
    return node;
  }
  put(key, value) {
    if (this.size === 0) return;
    let node = this.getNode(key);
    if (node) {
      node.value = value;
    } else {
      node = { key, value, freq: 1 };
      if (this.keyMap.size === this.size) {
        const minFreqMap = this.freqMap.get(this.minFreq);
        const oldNode = minFreqMap.values().next().value;
        minFreqMap.delete(oldNode.key);
        this.keyMap.delete(oldNode.key);
        if (minFreqMap.size === 0) {
          this.freqMap.delete(oldNode.freq);
        }
      }
      const freqOne = this.freqMap.get(1);
      if (freqOne) {
        freqOne.set(node.key, node);
      } else {
        this.freqMap.set(1, new Map([[node.key, node]]));
      }
      this.keyMap.set(node.key, node);
      this.minFreq = 1;
    }
  }
}
