/**
 * Three Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

 */

// Solution 1
function threeNumberSum(array, targetSum) {
      const newArrayResult = [[]];
      console.log("targetNumber:", targetSum)
      let position = 0;
      let end = array.length;
      let sum1 = 0;
      let sum2 = 0;
      let sum3 = 0;
    
         for (let index = 0; index < array.length - 1; index++) {
            sum1 = array[index];
              console.log("sum1:", sum1)
           
            for (let j = index + 1; j < array.length; j++) {
              sum2 = array[j];
              console.log("sum2:", sum2)
              
                for (let t = j + 1; t < array.length; t++) {
                  sum3 = array[t];
                  console.log("sum3:", sum3)
                  let result = sum1 + sum2 + sum3;
  
                  while(position === end){
                    console.log("rand all loops");
                  }if(result === targetSum){
                  console.log("twoSumResult", sum1 + " " + sum2 + "" + sum3)
                  position += 1;
                    
                  newArrayResult[0].push(sum1)
                  newArrayResult[0].push(sum2)
                  newArrayResult[0].push(sum3)
                  return newArrayResult;
                }                
                  console.log("position", position)
                  console.log("finalResult;", newArrayResult)    
                   
            }
              
          }
           
        } 
        
          return [];
    
}


// Solution 2
function threeNumberSum(array, targetSum) {
    // sort negative to positive
    function sortNumber(a, b) {
     return a - b;
    }
    array.sort(sortNumber);

  let triplets = [];
  
  for (let index = 0; index < array.length -2; index++) {
    let leftPointer = index + 1;
    let rightPointer =  array.length -1;

    while (leftPointer < rightPointer) {
        console.log("Keep checking")
      
        let currentSum = array[index] + array[leftPointer] + array[rightPointer];
        if(currentSum === targetSum ){
          console.log("found a match");
          triplets.push([array[index], array[leftPointer], array[rightPointer]]);
          leftPointer += 1;
          rightPointer -= 1;
        }else if(currentSum < targetSum){
          leftPointer += 1;
                    
        }else if (currentSum > targetSum){
          rightPointer -= 1;
          
        }     
    }
    
  }
  console.log("array data",triplets);  
  return triplets;
  
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
