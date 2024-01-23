/**
 * First Duplicate Value ★
Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).
In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.
If no integer appears more than once, your function should return -1.
Note that you're allowed to mutate the input array.

 */

/**
 * Function to find the first duplicate value in an array.
 * If no duplicate value is found, the function returns -1.
 */
function firstDuplicateValue(array) {
        // Initialize the minimum second index to the length of the array
        let minSecondIndex = array.length;
        
        // Loop through each element in the array
        for(let i = 0; i < array.length; i++){
            // Nested loop to compare the current element with the rest of the array
            for (let j = i + 1; j < array.length; j++) {
                // If a duplicate is found
                if(array[i] === array[j]){
                    // Update the minimum second index if the current duplicate's index is smaller
                    minSecondIndex = Math.min(minSecondIndex, j);
                }
            }
        }
        
        // If no duplicate was found, return -1
        if (minSecondIndex === array.length) {
                return -1;
        }
        
        // Return the first duplicate value
        return array[minSecondIndex];
}