/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 4.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const numbers = [1, 2, 4, 4, 5];

const squaredNumbers = numbers.map(number => number ** 2);

console.log("Original Numbers:", numbers);
console.log("Squared Numbers:", squaredNumbers);


// TODO 4.2 Use the filter method to create a new array that contains only the even numbers in the array
const numbers = [1, 2, 4, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Original Numbers:", numbers);
console.log("Even Numbers:", evenNumbers);


// TODO 4.3 Use the reduce method to find the sum of all numbers in the array
const numbers = [1, 2, 4, 4, 5];

const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

console.log("Original Numbers:", numbers);
console.log("Sum of Numbers:", sum);


// TODO 4.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const words = ['hello', 'world'];

const uppercaseWords = words.map(word => word.toUpperCase());

console.log("Original Words:", words);
console.log("Uppercase Words:", uppercaseWords);


// TODO 4.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const words = ['hello', 'world', 'apple', 'banana', 'orange'];

const wordsMoreThanFourLetters = words.filter(word => word.length > 4);

console.log("Original Words:", words);
console.log("Words with More than Four Letters:", wordsMoreThanFourLetters);


// TODO 4.6 Use the reduce method to concatenate all words in the array into a single string
const words = ['hello', 'world', 'apple', 'banana', 'orange'];

const concatenatedString = words.reduce((accumulator, currentWord) => accumulator + ' ' + currentWord, '');

console.log("Original Words:", words);
console.log("Concatenated String:", concatenatedString.trim());


// Checkpoint 4.1 Summarize what map, filter, and reduce do
// Answer: 
map: Transforms each element of an array based on a provided callback function.
filter: Creates a new array containing only the elements that pass a specified condition.
reduce: Reduces the array to a single value by applying a function against an accumulator and each element.
