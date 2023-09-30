/*
DoubleChar Sting: Saturday September 9, 2023
Given a string, you have to return a string
 in which each character is repeated once.*/

function doubleChar(str) {
    // Your code here
    let newStr = ""
    for(let i = 0; i < str.length; i++ ){
      newStr += str[i]
      newStr += str[i]
    }
    console.log(newStr)
    return newStr;
  }


  function doubleChar(str) {
    // Your code here
    const newStr = str.split("").map(char => char.repeat(2)).join("");
    return `The result is ${newStr}`;
  }
  
/*
Century of the year : Saturday September 9, 2023

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.
*/

function century(year) {
  // Finish this :)
  let century = year  / 100;
  let roundUpCentury = Math.ceil(century)
  console.log(roundUpCentury)
  
  return roundUpCentury;
}


/*
Hieghts to lowest: Saturday September 9, 2023

DESCRIPTION:
In this little assignment you are given a string 
of space separated numbers, and have to return the
highest and lowest number.

Possible Solution:
The defecult part of this problem is the fact that 
it is a string. 

my first thought is to creat an new array and 
push the numbers to the arry. However, i need to find 
away to remove the spaces in the string and combine
the - to the next number before pushing the number to 
the new array.

*/