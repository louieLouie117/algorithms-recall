//Given a string, you have to return a string
// in which each character is repeated once.

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
  

