/**
 * Smallest Difference
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, 5 and -5 have an absolute difference of 10; -5 and -4 have an absolute difference of 1.

You can assume that there will only be one pair of numbers with smallest difference.

 */

// Solution 1
// (Onlog(n) + Mlog(m)) Time || O(1)
function smallestDifference(arrayOne, arrayTwo) {
    // Initialize two pointers at the start of each array
    let pointerOne = 0;
    let pointerTwo = 0;
  
    // Initialize the smallest and current difference to Infinity
    let smallest = Infinity;
    let current = Infinity;
  
    // Initialize an array to store the pair of numbers with the smallest difference
    let smallestPair = [];
  
    // Sort both arrays in ascending order
    arrayOne.sort((a,b)=> a-b);
    arrayTwo.sort((a,b)=> a-b);
  
    // Loop while both pointers are within the bounds of their respective arrays
    while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
        // Get the numbers at the current positions of the pointers
        let firstNum = arrayOne[pointerOne];
        let secondNum = arrayTwo[pointerTwo];
      
        // If the first number is smaller than the second number
        if (firstNum < secondNum) {
            // Calculate the difference and move the first pointer forward
            current = secondNum - firstNum;
            pointerOne += 1;        
        } else if(secondNum < firstNum) {
            // If the second number is smaller than the first number, calculate the difference and move the second pointer forward
            current = firstNum - secondNum;
            pointerTwo += 1;
        } else {
            // If the numbers are equal, return them as the pair with the smallest difference
            return [firstNum, secondNum]
        }
  
        // If the current difference is smaller than the smallest difference found so far
        if(smallest > current){
            // Update the smallest difference and the pair of numbers
            smallest = current;
            smallestPair = [firstNum, secondNum]
        }
    }
  
    // Return the pair of numbers with the smallest difference
    return smallestPair;
}