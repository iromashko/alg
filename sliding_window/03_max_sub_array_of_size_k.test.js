const maxSubArrayOfSizeK = require('./03_max_sub_array_of_size_k');
describe('maxSubArrayOfSizeK', () => {
  it('do maxSubArrayOfSizeK', () => {
    const result = maxSubArrayOfSizeK(3, [2, 1, 5, 1, 3, 2]);
    expect(result).toEqual(9);
    const result2 = maxSubArrayOfSizeK(2, [2, 3, 4, 1, 5]);
    expect(result2).toEqual(7);
  });
});
