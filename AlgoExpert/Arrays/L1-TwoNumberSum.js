
// Two Number Sum-----------------------------------------------------------------------------------------------
/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can’t add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum. 
*/

// Solution 1
/*
This function uses a nested loop to find a pair of numbers in the array that add up to the target sum. It iterates over the array, and for each number, it iterates over the rest of the array. For each pair of numbers, it calculates their sum and checks if it's equal to the target sum. If it is, it adds the pair of numbers to the newArrayResult and returns it. If it's not, it continues to the next pair of numbers. If it goes through all pairs of numbers without finding a pair that adds up to the target sum, it returns an empty array.
*/
function twoNumberSumS1(array, targetSum) {
  console.log("twoNumberSum was called!!");

  // Initialize an empty array to store the pair of numbers that add up to the target sum
  const newArrayResult = [];
  console.log("targetNumber:", targetSum)
  
  // Iterate over the array, excluding the last element
  for (let index = 0; index < array.length - 1; index++) {
      // Get the current number from the array
      let sum1 = array[index];
      console.log("sum1:", sum1)
      
      // Iterate over the rest of the array, starting from the next element
      for (let j = index + 1; j < array.length; j++) {
          // Get the current number from the array
          let sum2 = array[j];
          // Calculate the sum of the two numbers
          let result = sum1 + sum2;
          
          console.log("sum2:", sum2)
          console.log("result", result)
  
          // If the sum is equal to the target sum, we've found our pair of numbers
          if(result === targetSum){
              console.log("twoSumResult", sum1 + " " + sum2)
              // Add the pair of numbers to the newArrayResult
              newArrayResult.push(sum1)
              newArrayResult.push(sum2)
              // Return the pair of numbers
              return newArrayResult;  
          }
      } 
  }
 
// If we've gone through the whole array and haven't found a pair of numbers that add up to the target sum, return an empty array
console.log("No pair of numbers found that add up to the target sum.", []);
return [];
}



  // Solution 2 - using object
  /**
    This function uses an object to store the numbers in the array. It loops through the array, and for each number, it checks whether the difference between the target sum and that number is in the object. If it is, it means that we've found a pair of numbers that add up to the target sum, so we return them. If it isn't, we add that number to the object and continue iterating through the array.
   */
// Solution 2
function twoNumberSumS2(array, targetSum) {
  // Initialize an empty object to store the numbers we've visited
  const nums = {};
  
  // Iterate over the array
  for (let num of array) {
      // Calculate the potential match by subtracting the current number from the target sum
      const potentialMatch = targetSum - num;
      
      // If the potential match is in the nums object, we've found a pair of numbers that add up to the target sum
      if (potentialMatch in nums) {
          // Return the pair of numbers
          return [potentialMatch, num];
      } else {
          // If the potential match is not in the nums object, add the current number to the nums object
          nums[num] = true;
      }
  }
  
  // If we've gone through the whole array and haven't found a pair of numbers that add up to the target sum, return an empty array
  return [];
}

const twoNumberSumArrow = (array, targetSum) => {
  console.log("twoNumberSumArrow was called!!");

  let arrynums = {};

  for (let num of array){
    let potentialMatch = targetSum - num;
    if (potentialMatch in arrynums){
      console.log("return both sums",   [potentialMatch, num]);
      return [potentialMatch, num];
    } else {
      arrynums[num] = true;
    }
  }
  console.log("No pair of numbers found that add up to the target sum.", []);
  return [];

}

 // Solution 3 - using pointers
/*
This function uses a two-pointer technique to find a pair of numbers in the array that add up to the target sum. It first sorts the array in ascending order, then it initializes two pointers: one at the start of the array, and one at the end. It calculates the sum of the numbers at the start and end pointers, and if the sum is equal to the target sum, it returns those two numbers. If the sum is less than the target sum, it moves the start pointer to the right. If the sum is greater than the target sum, it moves the end pointer to the left. It continues this process until it either finds a pair of numbers that add up to the target sum, or it has gone through the whole array without finding such a pair, in which case it returns an empty array.
 */
function twoNumberSumS3(array, targetSum) {
  // This function is used to sort numbers in ascending order
  function sortNumber(a, b) {
    return a - b;
  }

  // Sort the array in ascending order
  array.sort(sortNumber);
  console.log(array);

  // Initialize two pointers: one at the start of the array, and one at the end
  let startPointer = 0;
  let endPointer = array.length - 1;

  // Continue until the start pointer is no longer less than the end pointer
  while (startPointer < endPointer) {
    // Calculate the sum of the numbers at the start and end pointers
    let currentSum = array[startPointer] + array[endPointer];

    // If the current sum is equal to the target sum, we've found our pair of numbers
    if (currentSum === targetSum) {
      console.log("return both sums");
      return [array[startPointer], array[endPointer]];
    }
    // If the current sum is less than the target sum, move the start pointer to the right
    else if (currentSum < targetSum) {
      console.log("increase the left pointer");
      startPointer += 1;
    }
    // If the current sum is greater than the target sum, move the end pointer to the left
    else if (currentSum > targetSum) {
      console.log("decrease the right pointer");
      endPointer -= 1;
    }
  }

  // If we've gone through the whole array and haven't found a pair of numbers that add up to the target sum, return an empty array
  return [];
}
  

  
  