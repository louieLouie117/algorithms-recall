/*
Validate Subsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3 , 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

*/

// Solution 1 - Using a for of loop
function isValidSubsequenceS1(array, sequence) {
    console.log("ValidateSubsequence was called!!");
    console.log("array", array);   
    let sequencePosition = 0;
    
    for (let value of array) {
      console.log("value", value);   
       if(sequencePosition === sequence.length){
          break;
        }
          if(sequence[sequencePosition] === value){
          sequencePosition += 1;   
        }
   
      }  
      console.log("return", sequencePosition === sequence.length)
      return sequencePosition === sequence.length;
  }


  // Solution 2 - Using a for loop
  function isValidSubsequenceS2(array, sequence) {
    // Write your code here.
        console.log("isValidSubsequenceS2 was called!!");
      console.log("array", array);   
      let sequencePosition = 0;
      
      for (let i = 0; i < array.length; i++) {
        console.log("value", array[i]);   
         if(sequencePosition === sequence.length){
            break;
          }
            if(sequence[sequencePosition] === array[i]){
            sequencePosition += 1;   
          }
     
        }  
        console.log("return", sequencePosition === sequence.length)
        return sequencePosition === sequence.length;
    
  }
  
// solution 3 - Using a while loop
function isValidSubsequenceS3(array, sequence) {
  // Write your code here.
  console.log("isValidSubsequenceS3 was called!!");
  let arrayPointer = 0;
  let sequencePointer = 0;
  while (arrayPointer < array.length && sequencePointer < array.length) {
      console.log("run code if conditions have not been met")
      if(array[arrayPointer] === sequence[sequencePointer]){
            sequencePointer += 1;
      }
      arrayPointer += 1;
  }
      console.log("return", sequencePointer === sequence.length)
      return sequencePointer === sequence.length;
}



 



