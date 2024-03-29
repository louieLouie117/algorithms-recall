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

  /**
   * 3/11/2024
   * Complete the square sum function so that it squares each number passed into it and then sums the results together.
   * Thsi was the first time I used Math.pow() and it was very useful for this problem.
*/
    function squareSum(numbers){
      // Log the input array to the console
      console.log(numbers) 
      // Initialize an empty array to hold the squares of the numbers
      let arraySquare = [];
      // Initialize a variable to hold the result
      let result = 0;
      
      // Loop over the input array
      for(let i = 0; i < numbers.length; i++){
        // Square each number and store it in the variable 'square'
        let square = Math.pow(numbers[i], 2);  
        
        // Push the square of the number to the 'arraySquare' array
        arraySquare.push(square)   
      }
      
      // Loop over the 'arraySquare' array
      for(let j = 0; j < arraySquare.length; j++){       
        // Add each square to the 'result' variable
        result += arraySquare[j]
      }
      
      // Log the result to the console
      console.log("result", result)
      
      // Return the result
      return result;
    }

// using the ** operator and a single loop
    function squareSum(numbers) {
      let result = 0;
    
      for (let i = 0; i < numbers.length; i++) {
        const square = numbers[i] ** 2;
        result += square;
      }
    
      console.log("result:", result);
      return result;
    }


    /*3/11/2024: Fundom
    Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
    */

    function getCount(str) {
      console.log(str)
      let count = 0;
      let vowels = ["a","e","i","o","u"]
      
      for(let i = 0; i < str.length; i++){
        console.log("str", str[i])
        for(let j = 0; j < vowels.length; j++){
          if(vowels[j] === str[i]){
            count += 1;
          }
        }
      }
      console.log(count)
      return count;
    }


    // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// 3/12
// This was a fun alog and I need to remmber to use % to check if a number is even

function simpleMultiplication(number) {
  console.log("number", number)
let result = 0;

if (number % 2 === 0) {
  console.log("The number is even.");
  number = number * 8
} else {
  console.log("The number is odd.");
  number = number * 9;  
}
console.log("result", number)
return number;
    
}


// Refactored no result varibale needed
function simpleMultiplication(number) {
  console.log("number", number);

  if (number % 2 === 0) {
      console.log("The number is even.");
      number *= 8;
  } else {
      console.log("The number is odd.");
      number *= 9;
  }

  console.log("result", number);
  return number;
}






// 3/12/2024 
// Find the the other angle
// This was a smmple but fun alogos reay like the fundamentas 

function otherAngle(a, b) {
  console.log("Angel A", a)
  console.log("Angel B", b)
  let c = 180 - (a + b);
  console.log(c)
  return c;
}






// 3/12/2024
function countSheep (num){
  console.log("num", num)
  let count = 0;
  let stringArray = [];
  if(num === 0){
    return "";
  }

  let loopAmount = num;
  for(let i = 1; i <= loopAmount; i++){
    count += 1;
    stringArray.push(`${count} sheep...`);
  }
  console.log("result", stringArray)
  let resultSting = stringArray.join("");
  console.log("resultSting", resultSting)
  return resultSting;

}






/* 3/18/2024 
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function countVowels(str) {
  console.log(str)
  let count = 0;
  let vowels = ["a","e","i","o","u"]
  
  for(let i = 0; i < str.length; i++){
    console.log("str", str[i])
    for(let j = 0; j < vowels.length; j++){
      if(vowels[j] === str[i]){
        count += 1;
      }
    }
  }
  console.log(count)
  return count;
}

// refactored with Ai. This uses the includes method to check if a character is in the vowels array
function countVowels(str) {
  console.log(str);
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of str) {
      if (vowels.includes(char)) {
          count++;
      }
  }

  console.log(count);
  return count;
}







/** 3/18/2024
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */

class SmallestIntegerFinder {
   findSmallestInt(args) {
    console.log(args)
    
    let smallest = args[0];
    
    for(let i = 0; i < args.length; i++){
      console.log(args[i], " : ", smallest)
      
      if(args[i] < smallest){
        // updated the smallest number if args[i] < smallest -----------------
        smallest = args[i];
      }
    }
    
    console.log(smallest)
    
    // Return the smallest number
    return smallest
  }
}