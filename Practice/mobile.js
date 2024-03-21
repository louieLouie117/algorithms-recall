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




  /**3/21/204
   * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
   */
  function presentSheeps(sheep) {
    console.log("Sheep", sheep)
    let missingSheep = 0;
    for(let i=0; i < sheep.length; i++){
      console.log("is sheep precent",sheep[i])
      if(sheep[i] === null || sheep[i] === undefined || sheep[i] === false){
        missingSheep += 1;
      }
    }
    
    console.log("missing sheep count:", missingSheep)
    let presentSheep = sheep.length - missingSheep;
    return presentSheep;
  }
  
