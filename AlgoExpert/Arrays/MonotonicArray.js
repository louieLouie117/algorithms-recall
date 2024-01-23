/**
 * Monotonic Array
 * Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
 *
 * An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
 *
 * Non-increasing elements aren't necessarily exclusively decreasing; they simply don’t increase. Similarly, non-decreasing elements aren’t necessarily exclusively increasing; they simply don’t decrease.
 *
 * Note that empty arrays and arrays of one element are monotonic.
 */

function isMonotonic(array) {
    // Log the input array
    console.log("data", array)
  
    // Initialize two boolean variables to true. These will be used to track if the array is non-decreasing and non-increasing
    let nonDecreasing = true;
    let nonIncreasing = true;
    
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        // If the current element is less than the previous element
        if(array[i] < array[i - 1]){
            // Log the current and previous elements
            console.log("nonDecreasing", array[i], array[i - 1] )
            // Set nonDecreasing to false
            nonDecreasing = false;
        }
  
        // If the current element is greater than the previous element
        if(array[i] > array[i - 1]){
            // Log that the array is nonIncreasing
            console.log("nonIncreasing")
            // Set nonIncreasing to false
            nonIncreasing = false;
        }  
    }
  
    // Return true if the array is either non-decreasing or non-increasing, false otherwise
    return nonDecreasing || nonIncreasing;
}


// This function works by iterating over the array and checking if each element is less than or greater than the previous element. If it finds an element that is less than the previous element, it sets nonDecreasing to false. If it finds an element that is greater than the previous element, it sets nonIncreasing to false. If neither condition is met for any element in the array, the array is either entirely non-decreasing or entirely non-increasing, and the function returns true. If either condition is met, the function returns false.