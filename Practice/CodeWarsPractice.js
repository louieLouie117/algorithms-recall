/*Given a string, you have to return a string in which each character is repeated once.*/

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



//------------------------------------------------------------------------------


// We need a function that can transform a number (integer) into a string.
function numberToString(num) {
  // Return a string of the number here!
  //   let str = String(num);
  let str = num.toString();
  return str;
}

function numberToString(num) {
  return num.toString();
}


//------------------------------------------------------------------------------