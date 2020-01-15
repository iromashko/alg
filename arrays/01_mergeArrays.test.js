const mergeArrays = require('./01_mergeArrays');
describe('mergeArrays', () => {
  it('do mergeArrays', () => {
    const input1 = [4, 5, 6];
    const input2 = [-2, -1, 0, 7];
    expect(mergeArrays(input1, input2)).toEqual([-2, -1, 0, 4, 5, 6, 7]);
  });
});
