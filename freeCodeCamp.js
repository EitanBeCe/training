// Find the Longest Word in a String (returns length)
function findLongestWordLength(str) {
  return Math.max(...str.split` `.map((w) => w.length));
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);

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
