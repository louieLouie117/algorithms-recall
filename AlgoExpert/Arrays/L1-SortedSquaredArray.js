/**
 * Sorted Squared Array
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order 
 * and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
 */

// Solution 1
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
   


// Solution 2
function sortedSquaredArray(array) {
        // Initialize a new array to store the squares
        let newArray = [];
        // Initialize two pointers at the start and end of the array
        let startPosition = 0;
        let endPosition = array.length -1;
    
        // Loop through the array in reverse order to account for negative numbers
        for (let index = array.length -1; index >= 0; index--) {
            // Get the absolute values at the start and end positions
            let smallerValue = Math.abs(array[startPosition]);
            let largerValue = Math.abs(array[endPosition]);
        
            // If the absolute value at the start position is greater than the end position
            if (smallerValue > largerValue) { 
                // Square the value at the start position and add it to the new array at the current index
                newArray[index] = smallerValue * smallerValue; 
                // Move the start position pointer forward
                startPosition += 1;     
            } else {
                // Otherwise, square the value at the end position and add it to the new array at the current index
                newArray[index] = largerValue * largerValue;
                // Move the end position pointer backward
                endPosition -= 1;
            }
        }
        
        // Return the new array
        return newArray;
}