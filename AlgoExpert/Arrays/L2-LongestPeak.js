/**
 * Longest Peak
Write a function that takes in an array of integers and returns the length of the longest peak in the array.
A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.
For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly, the integers 1, 2,3 don't form a peak because there aren’t any strictly decreasing integers after the 3.
 */

// Solution 1  find the length of the longest peak in an array with multiple while loops
function longestPeak(array) {
    // Initialize the length of the longest peak to 0
    let longestPeak = 0;
    // Start from the second element in the array
    let i = 1;
    
    // Loop through the array until the second last element
    while (i < array.length -1) {
      // Check if the current element forms a peak with its adjacent elements
      let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]
      // If the current element does not form a peak, move to the next element
      if (!isPeak) {
          i += 1;   
          continue
      }
      
      // Find the left boundary of the peak
      let leftIdx = i - 2; 
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
          leftIdx -= 1;
      }
      
      // Find the right boundary of the peak
      let rightIdx = i + 2;
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
          rightIdx += 1;       
      }
      
      // Calculate the length of the current peak
      let currentPeakLen = rightIdx - leftIdx - 1;
      // Update the length of the longest peak if the current peak is longer
      longestPeak = Math.max(longestPeak, currentPeakLen);
      // Move to the right boundary of the current peak
      i = rightIdx
    }
  
    // Return the length of the longest peak
    return longestPeak;
}

// Test the function with an array
longestPeak([1, 3, 2]) // 3

