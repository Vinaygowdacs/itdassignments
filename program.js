//1. find a 2nd maximum and minimum number in an array
// function maxMin(arr) {
//     if (arr.length < 2) {
//         return [null, null]; 
//     }

//     arr.sort(function(a, b) {
//         return (a - b);
//     });

//     var secondMin = arr[1];
    
//     var secondMax = arr[arr.length - 2];

//     return [secondMax, secondMin];
// }

// var arr = [5, 2, 8, 9, 1, 3];
// var result = maxMin(arr);
// console.log("Second maximum number:", result[0]);
// console.log("Second minimum number:", result[1]);

//2.sort an array without using built in methods

// function Sort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len; i++) {
//         for (var j = 0; j < len - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// var arr = [5, 2, 8, 9, 1, 3];
// console.log("Original array:", arr);
// console.log("Sorted array:", Sort(arr.slice()));

//3.write a function to remove duplicate elements from an array
// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueArray.indexOf(arr[i]) === -1) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// let arr = [1, 2, 3, 4, 2, 3, 5];
// console.log("Original array:", arr);
// let uniqueArr = removeDuplicates(arr);
// console.log("Array with duplicates removed:", uniqueArr);















