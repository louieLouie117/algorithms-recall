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


