/**
 * Monotonic Array
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don’t increase. Similarly, non-decreasing elements aren’t necessarily exclusively increasing; they simply don’t decrease.

Note that empty arrays and arrays of one element are monotonic.

 */

function isMonotonic(array) {
    console.log("data", array)
  
    let nonDecreasing = true;
    let nonIncreasing = true;
    
    for (let i = 0; i < array.length; i++) {
  
        if(array[i] < array[i - 1]){
          console.log("nonDecreasing", array[i], array[i - 1] )
            nonDecreasing = false;
        }
  
       if(array[i] > array[i - 1]){
          console.log("nonIncreasing")
           nonIncreasing = false;
        }  
    }
  
    return nonDecreasing || nonIncreasing;
  }