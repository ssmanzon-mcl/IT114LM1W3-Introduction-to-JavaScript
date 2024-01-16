/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

console.log("4.1")

function greet(name){
    console.log(`Hello, ${name}!`)
}

greet("Mico")

console.log()

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: References states that the significant difference between the two is the function name, where it can
//         be omitted in function expressions to create anonymous functions.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

console.log("4.2")

const calculateArea = function(length, width){
    return length * width
}

const area = calculateArea(5, 10)
console.log("Area of a rectangle:", area)

console.log()

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: From the references, a callback is a function passed into another function as an argument.
// Example:

//function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

console.log("4.3")
function modifyArray(array, callback){
    return array.map(callback)
}

const numbers = [1,2,3,4,5]
const modifiedArray = modifyArray(numbers,function(num){
    return num + 1
})

console.log("Modifed Array:", modifiedArray)

console.log()

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

console.log("4.4")

const mathUtils = require('./mathUtils')

const sum = mathUtils.add(2,5) // Change numbers to add
console.log("Sum:", sum)

console.log("PI Constant:", mathUtils.PI)

console.log()

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

console.log("4.5")

const isPalindrome = require('./isPalindrome')

const wordCheck = "kayak" // change word here
const result = isPalindrome(wordCheck)

if (result){
    console.log(`The word ${wordCheck} is a palindrome.`)
}
else{
    console.log(`The word ${wordCheck} is not a palindrome.`)
}

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: The require functions and module.exports do are used in Node.js or CommonJS. The require function
//         is used to load or import modules from a file. On the other hand, module.exports handles and controls
//         what modules makes available to other modules that require it. The import and export keywords are parts
//         of the ECMAScript modules (ESM). The use of the import and export depends on the environment we were
//         working at. The ESM is the future of JavaScript modules, but CommonJS still has a role in node.js.
//         The usage of the keywords are dependent on the requirements, browser compatibility, and preference.
