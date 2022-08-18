// Delete all numbers that repeat in arr.
// [1,1,2,2,3,4,4,5,6,6,7,7,8,9] = [3,5,8,9]
const witoutRepeat = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      delete arr[i];
      delete arr[i + 1];
    }
  }
  return arr.filter(Number); // del empty
  // return arr.filter((n) => n); // del empty
};

console.log(witoutRepeat([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]));

// Delete duplicates
// const delRepeat = (arr) => {
//   return arr.filter((num, i, arr) => num !== arr[i + 1]);
// };

// console.log(delRepeat([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]));

// ) and ( should be in the same amount
// 1 With counters
// const checkBrackets = (brk) => {
//   let counter1 = 0;
//   let counter2 = 0;
//   for (const br of brk) {
//     if (br === '(') {
//       counter1 += 1;
//     } else {
//       counter2 += 1;
//     }
//   }
//   if (counter1 !== counter2) return false;
//   return true;
// };
// console.log(checkBrackets('((((())())()))()'));

// 2 With stack
// const checkBrackets = (brk) => {
//   const stack = [];
//   for (const br of brk) {
//     if (br === '(') {
//       stack.push(br);
//     } else {
//       const lastEl = stack.pop();
//       if (!lastEl) {
//         return false;
//       }
//     }
//   }
//   if (stack.length === 0) {
//     return true;
//   }
//   return false;
// };
// console.log(checkBrackets('((((())())()))()'));
