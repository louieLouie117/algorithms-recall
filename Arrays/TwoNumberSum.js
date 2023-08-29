// Two Number Sum loops O(n^2) time | O(1) space
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

  // Two sum hash table
  function twoNumberSum(array, targetSum) {
    // Write your code here.
    let nums = {};
    for (let index = 0; index < array.length; index++) {
      let num = array[index]
      let potentialMatch = targetSum - num;
      if(potentialMatch in nums){
        console.log("found two sums")      
        return [potentialMatch, num]
      }else{
        nums[num] = true;
      }
      
    }  
    console.log("nums object", nums)
    return [];
  }

  // Two sum position sort O(nlog(n)) | O(1)
  function twoNumberSum(array, targetSum) {
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