/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fifty
if (randomNumber > 50) {
    console.log("more than fifty");
} else {
    console.log("fifty or less");
}


// TODO 2.2 Display whether the random number is odd or even
if (randomNumber % 2 === 0) {
    console.log(`${randomNumber} is even`);
} else {
    console.log(`${randomNumber} is odd`);
}

console.log("Random Number:", randomNumber);


// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
} else if (randomNumber % 3 === 0) {
    console.log("fizz");
} else if (randomNumber % 5 === 0) {
    console.log("buzz");
} else {
    console.log(randomNumber);
}

console.log("Random Number:", randomNumber);


// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
const toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";

console.log(`Random Number: ${randomNumber}`);
console.log(`toDisplay: ${toDisplay}`);


// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: The switch statement is used to test thge equality of a variable against several valuesspecified in the test cases.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const N = 10;

for (let i = 1; i <= N; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
let index = 0;

while (index < list.length) {
    console.log(list[index]);
    index++;
}


// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Simulating a do-while loop
let condition;
do {
    console.log("This code will be executed at least once.");

    condition = false; 
} while (condition);


// TODO 2.7 Use a for of loop to display all the values in the list
const list = ["apple", "banana", "cherry", "date", "elderberry"];

for (const value of list) {
    console.log(value);
}


// TODO 2.8 Use a for in loop to display all the values in the list
const list = ["apple", "banana", "cherry", "date", "elderberry"];

for (const index in list) {
    const value = list[index];
    console.log(value);
}


// TODO 2.9 Use the for each method of the list to display all its values 
const list = ["apple", "banana", "cherry", "date", "elderberry"];

list.forEach(value => {
    console.log(value);
});


// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
for...of loop: Best suited for iterating over iterable objects like arrays, strings, or other iterable collections.
for...in loop: Primarily used for iterating over the properties of an object. It iterates over all enumerable properties, including those in the prototype chain.
forEach method: Specifically designed for arrays, and it allows you to iterate over each element in a more concise and expressive manner.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
try {
    const numerator = Math.floor((Math.random() * 100) + 1);
    const denominator = Math.floor((Math.random() * 5)); // Mocked value for testing

    if (denominator === 0) {
        throw new Error("Division by zero error");
    }

    const quotient = numerator / denominator;
    console.log("Quotient:", quotient);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Cleaning up resources");
}


