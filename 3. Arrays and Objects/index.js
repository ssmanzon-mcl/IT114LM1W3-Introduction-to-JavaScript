/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First Item:", firstItem);
console.log("Fifth Item:", fifthItem);
console.log("Last Item:", lastItem);


// Todo 3.2 calculate the min, max, and the average of the numbers array
let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Calculate min, max, and average of the numbers array
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("Minimum Number:", minNumber);
console.log("Maximum Number:", maxNumber);
console.log("Average:", average.toFixed(2)); 


// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
Python Lists: Can contain elements of different data types, and the type of the list can change dynamically.
JavaScript Arrays: Can also contain elements of different data types, but JavaScript itself is dynamically typed, so the type of the array can change dynamically.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const it114lCourse = {
    courseCode: "IT114L",
    courseName: "Introduction to Web Development",
    units: 3,
    numberOfStudents: 50 

console.log(it114lCourse);


// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
const it114lCourse = {
    courseCode: "IT114L",
    courseName: "Introduction to Web Development",
    units: 3,
    numberOfStudents: 50,
    professorName: "Job Lipat"
};


// Display the value of professorName
console.log("Job Lipat:", it114lCourse.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
const coursesThisTerm = [
    {
        courseCode: "IT114L",
        courseName: "Introduction to Web Development",
        units: 3,
        numberOfStudents: 50,
        professorName: "Job Lipat"
    },
    {
        courseCode: "CS102-1",
        courseName: "Data Structures and Algorithms",
        units: 2,
        numberOfStudents: 40,
        professorName: "Terrence Lim"
    },
    {
        courseCode: "IT132L",
        courseName: "Logic Design and Switching (Laboratory)",
        units: 2,
        numberOfStudents: 30,
        professorName: "Leonnel De Mesa"
    }
    {
        courseCode: IT133",
        courseName: "Technopreneurship",
        units: 3,
        numberOfStudents: 41,
        professorName: "Kristian Kikuchi"
    }
    {
        courseCode: IT114",
        courseName: "Web Systems and Technologies",
        units: 2,
        numberOfStudents: 42,
        professorName: "Adomar Ilao"
    }
    
];


// Display information about each course
coursesThisTerm.forEach(course => {
     console.log(`IT114: ${course.courseCode}`);
     console.log(`Web Systems and Technologies: ${course.courseName}`);
     console.log(`2: ${course.units}`);
     console.log(`42: ${course.numberOfStudents}`);
     console.log(`Adomar Ilao: ${course.professorName}`);
     console.log("--------------");

});


// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
const totalUnits = coursesThisTerm.reduce((sum, course) => sum + course.units, 0);

console.log("Total Units this Term:", totalUnits);


// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
JavaScript objects are often used as prototypes for creating instances using constructor functions or classes.
Python dictionaries are part of the core language and are used widely for various purposes.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
const originalNumbers = [1, 2, 3, 4, 5];
const additionalNumber = 6;

const newArrayWithAdditionalNumber = [...originalNumbers, additionalNumber];

console.log("Original Numbers:", originalNumbers);
console.log("New Array with Additional Number:", newArrayWithAdditionalNumber);


// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
const IT114L = {
    courseCode: "IT114L",
    courseName: "Introduction to Web Development",
    units: 3,
    numberOfStudents: 50,
    professorName: "Job Lipat"
};

const { courseCode, units } = IT114L;

console.log("Course Code:", courseCode);
console.log("Units:", units);
