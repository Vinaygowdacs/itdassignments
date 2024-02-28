//(1) Write a function curry that takes a function and curried arguments and returns a new function that can take the remaining arguments.

function curry(func, ...args){
    return function(...args2)
    {
        return func(...args, ...args2);
    }
}

//example function
function add(a, b, c){
    return a + b + c;
}

//curry the function
const curriedAdd = curry(add, 1);

//call the curried function with the remaining arguments

const result = curriedAdd(2, 3);

console.log(result);


//(2) Implement a function deepFlatten that takes a deeply nested array and flattens it.

function deepFlatten(arr){
    return arr.reduce((acc,val)=> Array.isArray(val)?
    acc.concat(deepFlatten(val)) :
     acc.concat(val), []);
}

//Example usage
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = deepFlatten(nestedArray);

console.log(flattenedArray);



//(3) Create a debounce function that limits the execution of a function call and waits for a certain amount of time before running it again

function debounce(func, delay)
{
    let timeoutId;
    return function (...args){

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
            
        }, delay);
    }
};

//example usage
function myFunction() {
    console.log("Function executed");
}

const debouncedFunction = debounce(myFunction, 5000);
//debounce with a 1- second delay

// Triggering the function multiple times in quick succession

debouncedFunction();
debouncedFunction();
debouncedFunction();


//(4) Write a throttle function that ensures a given function is only called at most once in a specified time period

function throttle(func, delay)
{
    let lastExecution = 0;

    return function(...args){
        const now = Date.now();

        if(now - lastExecution >= delay){
            func.apply(this,args);
            lastExecution = now;
        }
    };

}

//example usage
function myFunction(){
    console.log("Function executed");
}

const throttledFunction = throttle(myFunction, 3000);

throttledFunction();
throttledFunction();
throttledFunction();


//(5) Write a function chunk that splits an array into subarrays of specified length

function chunk(array, size){
    const result = [];

    for (let i = 0; i < array.length; i += size){

        result.push(array.slice(i, i + size));
    }
    return result;
}

//example usage
const originalArray = [1, 2, 3, 4, 5, 6, 7,8];
const chunkedArray = chunk(originalArray, 3);

console.log(chunkedArray);


//(6) Create a function deepEqual that compares two values deeply, checking if they are equal in value and structure

function deepEqual(value1,value2){
    if(value1 === value2) {
        return true;
    }

    if(typeof value1 !== 'object' || value1 ===null || typeof value2 !== 'object' || value2 === null){
        return false;
    }
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length){
        return false;
    }

    for (const key of keys1) {
        if (! keys2.includes(key) || ! deepEqual(value1[key], value2[key])){
            return false;
        }
    }
    return true;
}

//example usage

const obj1 = { a: 1, b: { c: 2} };
const obj2 = { a: 1, b: { c: 2} };
const obj3 = { a: 1, b: { c: 2} };


console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));


//(7) Implement your own bind function that replicates the functionality of JavaScript's native Function.prototype.bind

function customBind(func, context, ...args1) {
    return function (...args2){
        return func.apply(context, args1.concat(args2));
    };
}

//example usage
const originalFunction = function (greeting) {
    console.log(greeting + ' ' + this.name);
};

const boundFunction = customBind(originalFunction, { name: 'john' }, 'Hello');
boundFunction();



//(8) Write a function unique that returns a new array with only the unique elements from the original array.
function unique(array) {
    return Array.from(new Set(array));
}

//example usage
const originalArray1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = unique(originalArray1);

console.log(uniqueArray);


//(9) Implement a function intersection that finds the intersection of two arrays, returning an array with elements that appear in both
function intersection(array1, array2){
    return array1.filter(value => array2.includes(value));
}

//example usage
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];
const commonElements = intersection(arrayA, arrayB);

console.log(commonElements);


//(10) Write a custom filter function that mimics the behavior of the native Array.prototype.filter method.
function customFilter(array, callback){
    const result = [];

    for (let i = 0; i< array.length; i++){
        if(callback(array[i], i, array)){
            result.push(array[i]);
        }
    }
    return result;
}

//example usage
const numbers = [1,2,3,4,5];
const evenNumbers = customFilter(numbers, num => num % 2 === 0);

console.log(evenNumbers)


// (11) Create your own version of the reduce method called myReduce that mimics the behavior of the native Array.prototype.reduce
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ?  initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++){
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;

}

//example usage
const numbers1 = [1, 2, 3, 4, 5];
const sum = myReduce(numbers1, (acc, num) => acc + num, 0);

console.log(sum);





//(12)  Write a function permute that returns all possible permutations of the elements in an array


function permute(array){
    const result = [];

    function generatePermutations(currentPermutation, remainingElements){
        if (remainingElements.length === 0){
            result.push([...currentPermutation]);
            return;

        }
        for (let i = 0; i< remainingElements.length; i++)
        {
            const updatedPermutation = currentPermutation.concat(remainingElements[i]);
            const updatedRemaining = remainingElements.slice(0, i).concat(remainingElements.slice(i + 1));

            generatePermutations(updatedPermutation, updatedRemaining);
        }
    }

    generatePermutations([], array);
    return result;
}

//example usage

const inputArray = [1,2,3];
const permutations = permute(inputArray);

console.log(permutations);


// (13) Implement a function rotateArray that rotates an array to the right by a given number of steps

function rotateArray(arr, steps){
    const len = arr.length;

    if(len === 0 || steps % len === 0){

        return arr;
    }

    const effectiveSteps = steps % len;

    const rotatedPart = arr.slice(-effectiveSteps);
    const remainingPart = arr.slice(0,len - effectiveSteps);

    return rotatedPart.concat(remainingPart);
}

//example usage
const originalArray2 = [1,2,3,4,5];
const rotatedaArray = rotateArray(originalArray2, 2);

console.log(rotatedaArray);


//(14) Write a function isBalanced that takes a string containing only parentheses and checks if they are balanced.

function isBalanced(str){
    const stack = [];

    for(let char of str){
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        } else {
            if (stack.length === 0){

                return false;
            }
            const top = stack.pop();
            if( ( char === ')' &&top !== '(') || 
                                        (char === ']' && top !== '[')||
                                        (char === '}' && top !== '{')
                                         ) {
                                        return false;
                                     }
        }
    }
    return stack.length === 0;
}

//example usage

console.log(isBalanced("()"));
console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("((())"));


// (15) Create a function mergeIntervals that merges all overlapping intervals in an array of interval pairs.

function mergeIntervals(intervals){
    if(intervals.length <= 1){
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals =[intervals[0]];

    for(let i = 1; i <intervals.length; i++){
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]){

            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else{
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}

//example usage
const intervals = [[1,3], [2,6], [8,10], [15,18]];
const mergedResult = mergeIntervals(intervals);

console.log(mergedResult)



// (16) Implement a function nestedSum that calculates the sum of all numbers in a nested array, regardless of how deep the array is.

function nestedSum(arr){
    let sum = 0 ;

    for(let element of arr){
        if(Array.isArray(element)){
            sum += nestedSum(element);
        } else if(typeof element === 'number'){
            sum += element;
        }
    }
    return sum;
}

//example usage

const nestedArray1 = [1, [2, [3, 4], 5], 6, [7, [8, 9]]];
const result1 = nestedSum(nestedArray1);

console.log(result1);


//(17)  Implement a function calcLetters that calculates and resturns the sum of all repeated characters in an strings.
// Ex: input  => "Apple"
//    outout => {"A":1, "e":1, "l":1, "p":2}


function calcLetters(str){
      const charCount = {};

      for(let char of str.toLowerCase()){
        if(/[a-z]/.test(char))
        {
             charCount[char] = (charCount[char] || 0) + 1;
        }
      }

           let sum = 0;
           for(let count of Object.values(charCount)){
            if(count > 1){
                sum += count;
            }
           }

           return sum;

}

//example usage

const result2 = calcLetters("Apple");

console.log(result2);