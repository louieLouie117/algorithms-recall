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