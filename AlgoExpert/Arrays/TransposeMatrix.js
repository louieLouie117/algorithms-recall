// Transpose Matrix --------------------------------------------------------------
/*
    You're given a 2D array of integers matrix. Write a function
    that returns the transpose of the matrix. The transpose of a matrix is a flipped version of the original matrix across
    its main diagonal (which runs from top-left to bottom-right); it switches
    the row and column indices of the original matrix.
    You can assume the input matrix always has at least 1 value; however its
    width and height are not necessarily the same.
  
   */
//  solution 1
let sampleTrasnposeMarix = [
    [1,5,7],
    [3,4,6],
    [9,8,4]
]

function transposeMatrix(matrix) {
    // Write your code here
    transposeMatrix = [];
    for(let col = 0; col < matrix[0].length; col++){
      let newRow = [];
      for (let row = 0; row < matrix.length; row++) {
        newRow.push(matrix[row][col])
      }
      transposeMatrix.push(newRow)
    }
    return transposeMatrix;
  }

// Solution 2 with Ai
function transposeMatrix(matrix) {
    return matrix[0].map((_, col) => matrix.map(row => row[col]));
  }

