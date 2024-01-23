/**
 * Sorted Squared Array
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order 
 * and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
 */

function sortedSquaredArray(array) {
    // Initialize a new array to store the squares
    let newArray = [];
    
    // Loop through each element in the input array
    for (let index = 0; index < array.length; index++) {
        // Square the current element
        let squared = array[index] * array[index];
        // Add the squared value to the new array
        newArray.push(squared);
    }
    // Sort the new array in ascending order
    newArray.sort((a,b) => a-b)
    // Return the new sorted array
    return newArray;
}
 
    // function sortNumber(a, b) {
    //   return a - b;
    //  }
   // array.sort(sortNumber);
   
