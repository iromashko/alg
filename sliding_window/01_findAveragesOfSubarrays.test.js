const findAveragesOfSubarrays = require('./01_findAveragesOfSubarrays');

describe('findAveragesOfSubarrays', () => {
  it('find averages', () => {
    const result = findAveragesOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
    expect(result).toEqual([2.2, 2.8, 2.4, 3.6, 2.8]);
  });
});
