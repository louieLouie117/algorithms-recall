// Transpose Matrix solution 1
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

// Transpose Matrix solution 2 with Ai
function transposeMatrix(matrix) {
    return matrix[0].map((_, col) => matrix.map(row => row[col]));
  }