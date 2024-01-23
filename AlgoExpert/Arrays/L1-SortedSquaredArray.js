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

//    This function works by iterating over the input array, squaring each element, and adding the squared value to a new array. After all elements have been squared and added to the new array, the new array is sorted in ascending order and returned.

//    This solution has a time complexity of O(nlog(n)), where n is the length of the input array. This is because the array is iterated over once, and each element is squared and added to a new array. The new array is then sorted using the built-in sort method, which has a time complexity of O(nlog(n)).


   


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


// This function works by iterating over the input array in reverse order, comparing the absolute values at the start and end positions. It squares the larger of the two values and adds it to the new array at the current index, then moves the corresponding pointer. The process is repeated until all elements in the array have been squared and added to the new array in descending order. Since the array is iterated in reverse order, the result is a new array of squared values sorted in ascending order.

// Dose the loop have to be in reverse order? 
/**
 * Yes, in this specific implementation, the loop needs to be in reverse. The reason is that we're dealing with a sorted array of integers, which can include negative numbers. When these numbers are squared, they become positive and can be larger than the squares of the positive numbers.

By iterating in reverse, we're effectively filling the new array from the end. We start by comparing the absolute values of the numbers at the start and end of the original array, squaring the larger of the two, and placing the result at the end of the new array. We then move the corresponding pointer (either startPosition or endPosition) and repeat the process.

This ensures that the largest squares are placed at the end of the new array first, and the smallest squares are placed at the start. The result is a new array of squared numbers sorted in ascending order. If we didn't iterate in reverse, we would need an additional step to sort the new array after all the squares have been calculated.
 */