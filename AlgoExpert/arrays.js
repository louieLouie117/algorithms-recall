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


// Two Number Sum-----------------------------------------------------------------------------------------------
/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can’t add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum. 
*/

// Solution 1
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const newArrayResult = [];
  console.log("targetNumber:", targetSum)
  
     for (let index = 0; index < array.length - 1; index++) {
        let sum1 = array[index];
          console.log("sum1:", sum1)
       
        for (let j = index + 1; j < array.length; j++) {
          let sum2 = array[j];
          let result = sum1 + sum2;
          
          console.log("sum2:", sum2)
          console.log("result", result)

          if(result === targetSum){
            console.log("twoSumResult", sum1 + " " + sum2)
            newArrayResult.push(sum1)
            newArrayResult.push(sum2)
            return newArrayResult;  
          }
          console.log("finalResult;", newArrayResult)
      } 
   }
  return [];
  
}



// test cases 1 for toNumberSum function
const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

