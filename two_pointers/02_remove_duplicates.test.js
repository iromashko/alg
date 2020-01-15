const removeDuplicates = require('./02_remove_duplicates');
describe('removeDuplicates', () => {
  it('do removeDuplicates', () => {
    const input = [2, 3, 3, 3, 6, 9, 9];
    expect(removeDuplicates(input)).toEqual(4);
    const input2 = [2, 2, 2, 11];
    expect(removeDuplicates(input2)).toEqual(2);
  });
});
