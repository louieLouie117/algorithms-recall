
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
  
  