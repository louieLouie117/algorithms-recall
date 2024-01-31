/**
 * Merge Overlapping Intervals
Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

Each interval `interval` is an array of two integers, with `interval[0]` as the start of the interval and `interval[1]` as the end of the interval.

Note that back-to-back intervals aren't considered to be overlapping. For example, `[1, 5]` and `[6, 7]` aren't overlapping; however, `[1, 6]` and `[6, 7]` are indeed overlapping.

Also note that the start of any particular interval will always be less than or equal to the end of that interval.

 */




function mergeOverlappingIntervals(array) {
    // Sort the array based on the start of each interval
    let sortedArray = array.sort((a, b) => a[0] - b[0]);
    let mergedArray = [];
    
    let currentInterval = sortedArray[0];
    mergedArray.push(currentInterval);
  
    for (let nextInterval of sortedArray) {
        [_, currentIntervalEnd] = currentInterval;
        [nextIntervalStart, nextIntervalEnd] = nextInterval;
          console.log(nextInterval)
        // Check if the intervals overlap, merge them
        if(currentIntervalEnd >= nextIntervalStart){
            console.log("check and merge", currentIntervalEnd, nextIntervalStart)
            // Merge the intervals by setting the end of the current interval to the end of the next interval
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
        } else {
            // If the intervals do not overlap, move on to the next interval
            currentInterval = nextInterval;
            mergedArray.push(currentInterval);
        }
    }
  
    // Return the array of merged intervals
    return mergedArray;
}




/**
 * Here's a step-by-step summary of what the algorithm does:

1. Sort the array of intervals in ascending order based on the start of each interval. This is done to ensure that any overlapping intervals are adjacent in the array.

2. Initialize currentInterval to the first interval in the sorted array and add it to the mergedArray.

3. Iterate over the sorted array. For each nextInterval:

    Destructure currentInterval and nextInterval to get the end of the current interval (currentIntervalEnd) and the start and end of the next interval (nextIntervalStart and nextIntervalEnd).

    If currentIntervalEnd is greater than or equal to nextIntervalStart, it means the current interval and the next interval overlap. In this case, merge the intervals by setting the end of the current interval to the maximum of currentIntervalEnd and nextIntervalEnd.

    If currentIntervalEnd is less than nextIntervalStart, it means the current interval and the next interval do not overlap. In this case, move on to the next interval by setting currentInterval to nextInterval and add currentInterval to mergedArray.

4. After iterating over all intervals, return mergedArray, which now contains all original intervals but with any overlapping intervals merged.

This algorithm ensures that any overlapping intervals are merged into a single interval, and non-overlapping intervals are preserved. The time complexity is O(n log n) due to the sorting step, and the space complexity is O(n) for storing the result.
 */