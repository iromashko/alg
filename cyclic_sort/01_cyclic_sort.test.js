const cyclicSort = require('./01_cyclic_sort');

describe('cyclic sort', () => {
  it('sort array', () => {
    const array = [3, 1, 5, 4, 2];
    const array2 = [2, 6, 4, 3, 1, 5];
    const array3 = [1, 5, 6, 4, 3, 2];
    expect(cyclicSort(array)).toEqual([1, 2, 3, 4, 5]);
    expect(cyclicSort(array2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(cyclicSort(array3)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
