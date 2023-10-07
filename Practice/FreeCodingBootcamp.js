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





// ---------------------------------------------------------10/05/2023


// Understanding Boolean Values
/*Another data type is the Boolean. Booleans may only be one of two 
values: true or false. They are basically little on-off switches, 
where true is on and false is off. These two states are mutually 
exclusive. */
function welcomeToBooleans() {
  // Only change code below this line
  let boolean = true;
  return boolean // Change this line
  // Only change code above this line
}


// Use Conditional Logic with If Statements
/*if statements are used to make decisions in code. The keyword if 
tells JavaScript to execute the code in the curly braces under certain 
conditions, defined in the parentheses. These conditions are known as 
Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the 
statement inside the curly braces. When the Boolean condition evaluates
to false, the statement inside the curly braces will not execute. */
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false"
}


//  Comparison with the Equality Operator
/*There are many comparison operators in JavaScript. All of these 
operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality 
operator compares two values and returns true if they're equivalent 
or false if they are not. Note that equality is different from 
assignment (=), which assigns the value on the right of the operator 
to a variable on the left. */
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator
/*trict equality (===) is the counterpart to the equality operator (==).
 However, unlike the equality operator, which attempts to convert both
values being compared to a common type, the strict equality operator 
does not perform a type conversion.
If the values being compared have different types, they are considered 
unequal, and the strict equality operator will return false */
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);



// Practice comparing different values skiped it was to easy


// Comparison with the Inequality Operator
/*The inequality operaor (!=) is the opposite of the equality operator. 
It means not equal and returns false where equality would return 
true and vice versa. Like the equality operator, the inequality 
operator will convert data types of values while comparing. */      
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Comparison with the Strict Inequality Operator       
/*The strict inequality operator (!==) is the logical opposite 
of the strict equality operator. It means "Strictly Not Equal" and 
returns false where strict equality would return true and vice versa. 
The strict inequality operator will not convert data types. */
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);





// Comparison with the Greater Than Operator
/*The greater than operator (>) compares the values of two numbers. 
If the number to the left is greater than the number to the right, 
it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert 
data types of values while comparing. */
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operato
/*The greater than or equal to operator (>=) compares the values 
of two numbers. If the number to the left is greater than or equal 
to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator 
will convert data types while comparing. */
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Less Than Operator
/*The less than operator (<) compares the values of two numbers. 
If the number to the left is less than the number to the right, it 
returns true. Otherwise, it returns false. Like the equality operator, 
the less than operator converts data types while comparing. */
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
/*The less than or equal to operator (<=) compares the values of 
two numbers. If the number to the left is less than or equal to the 
number to the right, it returns true. If the number on the left is 
greater than the number on the right, it returns false. Like the 
equality operator, the less than or equal to operator converts data types. */
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


// Comparisons with the Logical And Operator
/*Sometimes you will need to test more than one thing at a time. 
The logical and operator (&&) returns true if and only if the operands 
to the left and right of it are true. */
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25)  {
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);


// Comparisons with the Logical Or Operator
/*The logical or operator (||) returns true if either of the operands 
is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). 
This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints. */
function testLogicalOr(val) {
  // Only change code below this line
  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);


// Introducing Else Statements
/*When a condition for an if statement is true, the block of code 
following it is executed. What about when that condition is false? 
Normally nothing would happen. With an else statement, an alternate 
block of code can be executed. */
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);



// Introducing Else If Statements
/*If you have multiple conditions that need to be addressed, you 
can chain if statements together with else if statements. */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";

  }

}

testElseIf(7);









































