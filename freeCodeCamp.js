// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; ) {
//     const smallArr = arr.splice(0, size);
//     newArr.push(smallArr);
//   }
//   return newArr;
// }
// console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

//
//
// Mutations
// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.
// function mutation(arr) {
//   const arr1 = arr[0].toLowerCase().split``;
//   const arr2 = arr[1].toLowerCase().split``;
//   console.log(arr2);
//   for (const l of arr2) {
//     if (!arr1.includes(l)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(mutation(['hello', 'Hey'])); // false, no 'y' in hello

//
//
// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
// getIndexToIns([20,3,5], 19) should return 2
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2

// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (num === arr[i]) {
//       return i;
//     }
//     if (num > arr[i] && num < arr[i + 1]) {
//       return i + 1;
//     }
//   }
//   return arr.length;
// }
// console.log(getIndexToIns([20, 3, 5], 19));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// console.log(getIndexToIns([2, 5, 10], 15));

//
//
// Remove all falsy values from an array.
// function bouncer(arr) {
// 1
// return arr.filter((el) => !!el === true);
// }
// console.log(bouncer([7, 'ate', '', false, 9]));

//
//
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// The second array should remain the same after the function runs.
// function frankenSplice(arr1, arr2, n) {
//   const arr = [...arr2];
//   arr.splice(n, 0, ...arr1);
//   return arr;
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//
//
//Return the provided string with the first letter of each word capitalized.
//Make sure the rest of the word is in lower case.

// function titleCase(str) {
//   return str.toLowerCase().split` `.map((w) => w[0].toUpperCase() + w.slice(1))
//     .join` `;
// }
// console.log(titleCase("I'm a little tea pot"));

//
//
// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
//
// function booWho(bool) {
//   if (bool === true || bool === false) {
//     return true;
//   }
//   return false;
// }
// console.log(booWho(null));

//
//
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
//If no element passes the test, return undefined.
// function findElement(arr, func) {
//   for (const num of arr) {
//     if (func(num)) {
//       return num;
//     }
//   }
// }
// console.log(findElement([1, 3, 5, 9], (num) => num % 2 === 0));

//
//
// Truncate a String ('...' if it was cutten)
// function truncateString(str, num) {
//   console.log(str.slice(0, num).length === str.length);
//   if (str.slice(0, num) === str.length) {
//     return str.slice(0, num);
//   }
//   return str.slice(0, num) + '...';
// }
// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 43));

//
//
// Repeat a String Repeat a String
// function repeatStringNumTimes(str, num) {
//   // 1
//   // return str.repeat(num);

//   // 2
//   let newStr = '';
//   for (let i = 0; i < num; i++) {
//     newStr += str;
//   }
//   return newStr;
// }
// console.log(repeatStringNumTimes('abc', 3));

//
//
// // Confirm the Ending (without endsWith())
// // return str.endsWith(target);
// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
// }
// console.log(confirmEnding('Bastian', 'n'));

//
//
// Return Largest Numbers in Arrays
// function largestOfFour(arr) {
//1
// return arr.map((ar) => Math.max(...ar));

//2
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(Math.max(...arr[i]));
// }
// return newArr;
// }
// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

//
//
// // Find the Longest Word in a String (returns length)
// function findLongestWordLength(str) {
//   return Math.max(...str.split` `.map((w) => w.length));
// }
// console.log(
//   findLongestWordLength('The quick brown fox jumped over the lazy dog')
// );

//
//
// Factorialize a Number
//5! = 1 * 2 * 3 * 4 * 5 = 120
// function factorialize(num) {
//   let n = 1;
//   for (let i = 1; i <= num; i++) {
//     n *= i;
//   }
//   return n;
// }
// console.log(factorialize(5));

//
//
// //filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i].includes(elem)) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Only change code above this line
//   return newArr;
// }
// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     13
//   )
// );
