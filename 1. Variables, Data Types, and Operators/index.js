/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
var myVariable = "Hello, World!";
console.log(myVariable);


// TODO 1.2 Use the let keyword to define a variable.
let myVariable = "Hello, World!";
console.log(myVariable);


// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const myConstantVariable = "Hello, World!";
console.log(myConstantVariable);


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
// var: Has function-level scope. Variables declared with var are scoped to the nearest function block.
// let: Has block-level scope. Variables declared with let are scoped to the nearest enclosing block, whether it's a loop, a conditional statement, or a function.
// const: Also has block-level scope like let, but once assigned, the value cannot be reassigned.


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Addition
let sum = a + b;
console.log(`Sum: ${sum}`);
// Subtraction
let difference = a - b;
console.log(`Difference: ${difference}`);
// Multiplication
let product = a * b;
console.log(`Product: ${product}`);
// Division
let quotient = a / b;
console.log(`Quotient: ${quotient}`);


// Checkpoint 1.2 What operators did you use?
// Answer: Addition, Subtraction, Multiplication, and Division Operators.


// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// String concatenation using the + operator
let str1 = "Hello";
let str2 = " World";
let concatenatedString = str1 + str2;
console.log(concatenatedString);
// String length using the length property
let message = "Hello, World!";
let messageLength = message.length;
console.log(`Message Length: ${messageLength}`);


// Checkpoint 1.3 What operators did you use?
//Answer: String Concatenation Operator (+): and String Length Property (length):


// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Logical AND (&&) operator
let condition1 = true;
let condition2 = false;

if (condition1 && condition2) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}
//Logical OR (||) operator
let condition3 = true;
let condition4 = false;

// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND (&&) operator and Logical OR (||) operator


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
// Relational operators
let a = 5;
let b = 10;
// Equal to (==) operator
console.log(`Is a equal to b? ${a == b}`); // false


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] == false evaluates to true. This behavior might seem counterintuitive at first, but it can be explained by the type coercion rules in JavaScript.
