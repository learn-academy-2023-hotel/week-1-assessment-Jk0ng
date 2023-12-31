// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// input: two arrays 
// expected output: length/a number
// concantenate two arrays and then use .length to find the expected out put


console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)




// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code: 
// input is a string; output should be the string in reversed order
// convert the string to an array and then reverse the array, then print the array 
// console.log(currentCohort.split().reverse()) --> output 9
// [ 'Golf 2023' ]
// console.log(currentCohort.split("")
// console.log(currentCohort.split("").reverse())
//both inpout and output should be strings, so the workflow should be like string-->convert to array-->reverse-->convert tostring
console.log(currentCohort.split("").reverse().join(""))


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// input is a list of number in an array; output should be the odd numbers from the array list 
// 1.st run an conditional statement with the condition being stockExchange[i] is odd/stockExchance[i] % 2 !== 0, 
// 2nd. do a loop to increase the increment [i] by 1 until [i] < .length

for (i = 0; i < stockExchange.length; i++){
    if(stockExchange[i] % 2 !== 0){
        console.log(stockExchange [i])
    }
}