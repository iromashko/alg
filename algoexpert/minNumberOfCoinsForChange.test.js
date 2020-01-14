const minNumberOfCoinsForChange = require('./minNumberOfCoinsForChange');

describe('minNumberOfCoinsForChange', () => {
  it('make a change', () => {
    const result1 = minNumberOfCoinsForChange(24, [1, 5, 10]);
    const result2 = minNumberOfCoinsForChange(9, [3, 4, 5]);
    const result3 = minNumberOfCoinsForChange(7, [1, 5, 10]);

    expect(result1).toEqual(6);
    expect(result2).toEqual(2);
    expect(result3).toEqual(3);
  });
});
