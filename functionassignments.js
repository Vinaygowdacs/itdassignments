// //sum of two numbers


// function addNumbers(a,b) {
//     return a+b 
// }

// let result = addNumbers(56,78)

// console.log(result)


// //check for even or odd

// function checkEvenOrOdd(number)
// {
//     if(number % 2 === 0){
//         return "even"
//     } else{
//         return "odd"
//     }
// } 

// let data = checkEvenOrOdd(180)
// console.log(data)


// //Reverse a  string

// function reverseString(inputString) {

//     return inputString.split('').reverse().join('');
// }

// let reversed = reverseString("Hello,World")
// console.log(reversed)


// //calculate square


// function calculateSquare(number) {
//     return number **2 
// }

// let squared = calculateSquare(24)
// console.log(squared)

//concatenate strings

// function concatenateString(str1,str2)
// {
//     return str1+str2
// }

// let out = concatenateString("hello","World")
// console.log(out)
 
//check for pailndrome

function isPailndrome(str) {

    // const cleanStr = str.replace(/[^a-zA-z0-9]/g,'').toLowerCase()


    return str === str.split('').reverse().join('')
}

let pailndrome = isPailndrome("vinay")
console.log(pailndrome)




//calculate factorial

// function calculateFactorial(n)
// {
//     if(n === 0 || n === 1){
//         return 1
//     } else{
//         return n * calculateFactorial(n-1)
//     }
// }
// let factorial=calculateFactorial(9)
// console.log(factorial)


// //Maximum of two numbers


// function findMaxNumber(a,b){
//     return Math.max(a,b)
// }

// let max=findMaxNumber(8,12)
// console.log(max)


// //greet a person

// function greetPerson(name){
//     return "hello,"  + name + "! welcome !"
// }

// let greeting = greetPerson("nithya")
// console.log(greeting)

// //calculate Average

// function calculateAverage(numbers){
//     if(numbers.length === 0) {
//         return 0
//     }

//     const sum = numbers.reduce((acc,num) =>
//         acc+num,0)
//     return sum / numbers.length
// }

// let average = calculateAverage([5,10,15,20])
// console.log(average)


