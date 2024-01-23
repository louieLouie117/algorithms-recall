/**
 * Move Element To End
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.
The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

 */

// Solution 2
// Time = O(n) Space = O(1)
function moveElementToEnd(array, toMove) {
    // Initialize two pointers at the start and end of the array
    let leftPointer = 0;
    let rightPointer = array.length -1;
  
    // Loop while the left pointer is less than the right pointer
    while (leftPointer < rightPointer) {
        // While the left pointer is less than the right pointer and the element at the right pointer is equal to the target element
        while (leftPointer < rightPointer && array[rightPointer] === toMove) {
            // Move the right pointer backward
            rightPointer -= 1;
        }
        // If the element at the left pointer is equal to the target element
        if( array[leftPointer] === toMove){
            // Swap the elements at the left and right pointers
            let temp = array[leftPointer];
            array[leftPointer] = array[rightPointer]
            array[rightPointer] = temp;
        }
      
        // Move the left pointer forward
        leftPointer += 1;     
    }
  
    // Return the modified array
    return array;
}

/**
 * This function works by iterating over the array with two pointers, one starting at the beginning (left pointer) and one at the end (right pointer). If the element at the right pointer is equal to the target element, the right pointer is moved backward. If the element at the left pointer is equal to the target element, the elements at the left and right pointers are swapped. The left pointer is then moved forward. The process is repeated until the left pointer is no longer less than the right pointer. The function then returns the modified array, with all instances of the target element moved to the end.
 */