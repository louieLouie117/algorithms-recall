// 3/21/2024
/**
 You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.


 */


function updateLight(current) {
    if (current === "green"){
         return "yellow"
    }
     else if (current === "yellow"){
         return "red"
     }
     else if (current === "red"){
         return "green"
     }else {
       console.log("erorr no statments are true")
     }
 
 }




 

 /**
  * 3/21/2024
  * Given an integral number, determine if it's a square number:
  */

 function isSquare(){
    console.log(n)
    let thePerficSquare = n >= 0 && Math.sqrt(n) % 1 === 0;
    return thePerficSquare
  }
  
  
