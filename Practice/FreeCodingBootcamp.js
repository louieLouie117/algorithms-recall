const remainder = 11 % 3;


// uoting Strings with Single 



//  Word Blank 
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "I saw a " + myAdjective + " ugly " + myNoun + " and I " + myVerb + " away from from it " + myAdverb ; // Change this line
// Only change code above this line


// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Hello", 2023, "World"];

// Nest one Array within Another Array
const myArray = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
// Create a variable called myData and set it to equal the first value of myArray using bracket notation
const myArray = [50, 60, 70];
let myData = myArray[0]



// Modify Array Data With Indexes
// Modify the data stored at index 0 of myArray to a value of 45.
// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;




// ccess Multi-Dimensional Arrays With Indexes
// Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];





// Wednesday Oct 4 2023--------------------------------------------------

// Manipulate Arrays With .push() Method added elements to the end 
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);


// Manipulate Arrays With pop Method removes from the end
const myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop();

// Manipulate Arrays With .shift() Method removed from the start
const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift();



// Manipulate Arrays With .unshift() Method addeds elements to the start
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Added to the start of he array
myArray.unshift(["Paul", 35])



// Shopping List multi-dimensional array
const myList = [
  ["Kandy", 20],
  ["Shoes", 1],
  ["Shirt", 5],
  ["Phone", 2],
  ["Cookes", 5]
];


// Reusable JavaScript with Function
function reusableFunction(){
  console.log("Hi World")
}

reusableFunction();


// Passing Values to Functions with Arguments
/* Parameters are variables that act as placeholders for the values 
that are to be input to a function when it is called. When a function 
is defined, it is typically defined along with one or more parameters. 
The actual values that are input (or "passed") into a function when it
 is called are known as arguments. */
function functionWithArgs(p1, p2){
    console.log(p1 + p2);
  }
functionWithArgs(1,2);


 
// Return a Value from a Function with Return
/*We can pass values into a function with arguments. You can use 
a return statement to send a value back out of a function. */
function timesFive(num){
  return num * 5;
}

const answer = timesFive(2);


// Global Scope and Functions
/*In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block have Global 
scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are 
automatically created in the global scope. This can create unintended 
consequences elsewhere in your code or when running a function again. 
You should always declare your variables with let or const. */

// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

 

// Local Scope and Functions
/**Variables which are declared within a function, as well as the 
 function parameters, have local scope. That means they are only 
 visible within that function. */
 function myLocalScope() {
  // Only change code below this line
  let myVar = "hello world";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Global vs. Local Scope in Functions
/* It is possible to have both local and global variables with 
the same name. When you do this, the local variable takes precedence 
over the global variable. */

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Understanding Undefined Value returned from a Function
/*A function can include the return statement but it does not have to.
 In the case that the function doesn't have a return statement, when 
 you call it, the function processes the inner code but the returned 
 value is undefined.*/

 // Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


//  Algorithms and Data Structures
/* This was fun. I never knew you could reassign a variable 
to a function tha has an argument this will be good when I needed
to get results */
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed)

// Stand in Line
/*In Computer Science a queue is an abstract Data Structure where items
 are kept in order. New items can be added at the back of the queue and 
 old items are taken off from the front of the queue */

/*This was fun and even though I had to wathc a the vidoe I learn a lot
I thought that I could not change the retrun but that is what they were 
asking for. */
 function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  console.log("resuts", arr)
  let nextInLine = arr.shift()
  
  return nextInLine;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

 