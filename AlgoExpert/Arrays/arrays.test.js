const { twoNumberSum } = require('./TwoNumberSum');
const { TransposeMatrix } = require('./TransposeMatrix');

describe('twoNumberSum', () => {
  it('should return an empty array if no two numbers sum up to the target sum', () => {
    const array = [1, 2, 3, 4, 5];
    const targetSum = 10;
    const result = twoNumberSum(array, targetSum);
    expect(result).toEqual([]);
  });

  it('should return an array of two numbers that sum up to the target sum', () => {
    const array = [3, 5, -4, 8, 11, 1, -1, 6];
    const targetSum = 10;
    const result = twoNumberSum(array, targetSum);
    expect(result).toEqual([11, -1]);
  });

  it('should return an array of two numbers that sum up to the target sum, in any order', () => {
    const array = [3, 5, -4, 8, 11, 1, -1, 6];
    const targetSum = 10;
    const result = twoNumberSum(array, targetSum);
    expect(result).toContain(11);
    expect(result).toContain(-1);
  });
});


describe('TransposeMatrix', () => {
  it('should return an empty array if no two numbers sum up to the target sum', () => {
    const matrix = [
      [1, 5, 7],
      [3, 4, 6],
      [9, 8, 4],
    ];
    const result = TransposeMatrix(matrix);
    expect(result).toEqual([
      [1, 3, 9],
      [5, 4, 8],
      [7, 6, 4],
    ]);
  });
})

