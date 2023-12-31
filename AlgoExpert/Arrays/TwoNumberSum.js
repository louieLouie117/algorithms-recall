
// Two Number Sum-----------------------------------------------------------------------------------------------
/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can’t add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum. 
*/

// Solution 1
function twoNumberSumS1(array, targetSum) {
    console.log("twoNumberSum was called!!");
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



  // Solution 2 - using object
  function twoNumberSumS2(array, targetSum) {
    console.log("data", array, "target", targetSum);
    let nums = {};
    
    for (let index = 0; index < array.length; index++) {    
      let num = array[index];
      let potentialMatch = targetSum - num;
      
      if(potentialMatch in nums){
        console.log("Final object data", nums)
        console.log("found two sums", [potentialMatch, num])         
        return [potentialMatch, num]
      }else{
        console.log("add to object", nums) 
        nums[num] = "check";
        
      } 
      
    }  
    
    return [];
  }

  // Solution 3 - using pointers
  function twoNumberSumS3(array, targetSum) {
    // sort negative to positive
    function sortNumber(a, b) {
     return a - b;
    }
    array.sort(sortNumber);
    console.log(array);
    
    let startPointer = 0;
    let endPointer = array.length -1;
  
    while (startPointer < endPointer){
        let currentSum = array[startPointer] + array[endPointer];
        if(currentSum === targetSum){
          console.log("return both sums")
          return [array[startPointer], array[endPointer] ]
          
          }else if(currentSum < targetSum){
              console.log("increase the left pointer")
              startPointer += 1;
          }else if (currentSum > targetSum ){
            console.log("decrease the right pointer")
              endPointer -= 1;
          }
      
    }
    return [];
  
  }
  

  
  