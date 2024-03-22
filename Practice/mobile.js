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


/**3/21/24

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
   */

  function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    console.log("My score", yourPoints);
    console.log("ClassPoints", classPoints)
  //   set var for numbers added
    let sumNumbers = 0;
  //   loop the array and add the number
    for(let i =0; i < classPoints.length; i++){
      console.log("loop is running", classPoints[i])
      sumNumbers += classPoints[i]
      
    }
    console.log("Sum Numbser", sumNumbers)
    let average = sumNumbers / classPoints.length
      console.log("Average", average)
    if(yourPoints > average ){
      return true;
    }else{
      return false;
    }
  }





  /**
   * 3/22/24
 Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise return 'Hello guest'
   */
  function greetBoss (name, owner) {
    // Add code here
    console.log("name", name)
    console.log("owner", owner)
    
    if(name === owner){
      return "Hello boss"
    }else{
      return "Hello guest"
    }
  }










  
  
