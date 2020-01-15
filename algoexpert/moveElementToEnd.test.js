const moveElementToEnd = require('./moveElementToEnd');
describe.skip('moveElementToEnd', () => {
  it('do moveElementToEnd', () => {
    let result = moveElementToEnd([3, 1, 2, 4, 5], 3);
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });
});
