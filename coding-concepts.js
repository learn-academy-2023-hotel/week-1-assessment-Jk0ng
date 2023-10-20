// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: answer is correct becasue the .length property calls to count the number of characters in a string including space and punctucation. And the cohort const has 10 characters including space

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the anwer is correct because [] calls for bracket notation which outputs the character of the index number that is inside the []. In this case, becasue Jscript is zero-indexed, from left to right, the 4th index which is the 5th charater is letter o. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: the answer is correct, because the console.log(langauges[index]) is essentiall the same as console.log(["JavaScript", "Ruby", "Python", "C++"][1]), asking for the first index of the item in the array. Index can be applied to both a string and an array. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY,SUNDAY
// b) Verify and explain: the answer is TypeError: weekendDays.toUpperCase is not a function
// maybe this is because .toUpperCase is not a function for arrays but for strings. because the input is an array, and the built-in method is designed for string property, the code wouldn't work. but the following scenerio worked
// const weekDays = "Monday, Tuesday"
// console.log(weekDays.toUpperCase()) --> output :MONDAY, TUESDAY

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: the answer is correct, because .lenght asks for the number of data in the array dataTypes, and the typeof command asks for the type of the data returned. In this case, the code is the same as cconsole.log(typeof 4) which returns "number"
