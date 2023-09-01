// Probelem 
// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.


// let array = [3, 5, -4, 8, 11, 1, -1, 6];
// let targetSum = 10;


// Two Number Sum loops O(n^2) time | O(1) space
function twoNumberSumLoop(array, targetSum) {
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



  // Two sum hash table
  function twoNumberSum(array, targetSum) {
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

  // Two sum position sort O(nlog(n)) | O(1)
  function twoNumberSumSort(array, targetSum) {
    // sort negative to positive
    function sortNumber(a, b) {
     return a - b;
    }
    array.sort(sortNumber);
    console.log(array);
    
    leftPointer = 0;
    rightPointer = array.length -1;
  
    while (leftPointer < rightPointer){
        let currentSum = array[leftPointer] + array[rightPointer];
        if(currentSum === targetSum){
          console.log("return both sums")
          return [array[leftPointer], array[rightPointer]]
          
          }else if(currentSum < targetSum){
              console.log("increase the left pointer")
              leftPointer += 1;
          }else if (currentSum > targetSum ){
            console.log("decrease the right pointer")
              rightPointer -= 1;
          }
      
    }
    return [];
  
  }





Ss