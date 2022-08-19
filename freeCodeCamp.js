// Truncate a String ('...' if it was cutten)
function truncateString(str, num) {
  console.log(str.slice(0, num).length === str.length);
  if (str.slice(0, num) === str.length) {
    return str.slice(0, num);
  }
  return str.slice(0, num) + '...';
}
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 43));

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
