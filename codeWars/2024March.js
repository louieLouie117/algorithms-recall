// 2/28/2024
// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
    let wordWithSpace = [];
     for (let i = 0; i < string.length; i++) {
  
          // Check if the character is uppercase
          if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) {
              wordWithSpace.push(" ");
          }
          wordWithSpace.push(string[i]);
       
      }
  
      let newWord = wordWithSpace.join("").replace(/,/g, "");
      console.log(newWord); // Output the modified string
  
      return newWord; // Return the modified string
  }

  /**
   * 2/29/2024
   * Given an array of integers, find the one that appears an odd number of times.
   * There will always be only one integer that appears an odd number of times.
   */
  function findOdd(arr) {
    //happy coding!
    for (let i = 0; i < arr.length; i++) {
      let count = 0; // Initialize a counter for each element
  
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++; // Increment the count if the elements match
        }
      }
  
      if (count % 2 !== 0) {
        console.log("Odd-occurring element:", arr[i]);
        return arr[i]
      }
      
    }
  }