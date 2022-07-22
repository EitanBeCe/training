// https://javascript.info/array-methods









// // 8
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];

// function sortByAge(users) {
//     return users.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);
// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete



// // 7. 
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// /* ... your code ... */
// let usersMapped = users.map(user => ({
//         fullName: `${user.name} ${user.surname}`,
//         id: user.id,
//     })    
// );
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName ); // John Smith









// // 6. Create a constructor function Calculator that creates “extendable” calculator objects.
// // The task consists of two parts.
// // First, implement the method calculate(str) that takes a string like "1 + 2" in the 
// // format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
// function Calculator() {
//     // this.calculate = function(str) {
//     //     let arr = str.split(' '); 
//     //     return arr[1] === "+" ? +arr[0] + (+arr[2]) : +arr[0] - (+arr[2]);
//     // };
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b, 
//     };

//     this.calculate = function(str) {
//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) { return NaN; }

//         return this.methods[op](a, b);
        
//     };

//     this.addMethod = function(operator, func) {
//         this.methods[operator] = func;
//     };

// }
// //1 
// let calc = new Calculator;
// console.log( calc.calculate("3 + 7") ); // 10
// //2
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8







// 5. copySorted(arr)
// function copySorted(arr) {
//     let newArr = [];
//     for (const word of arr) {
//         newArr.push(word);
//     }
//     return newArr.sort((a, b) => a.localeCompare(b));
//     // return newArr.sort((a, b) => a > b ? 1 : -1);
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)






// //4. // ... your code to sort it in decreasing order
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log( arr ); // 8, 5, 2, 1, -10







// 3. look in the end
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }    
//     }
// } 
// function filterRangeInPlace(arr, a, b) {
//     let newArr = arr.filter(n => n >= a && n <= b);
//     arr.length = 0;
//     for (const n of newArr) {
//         arr.push(n);
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// console.log( arr ); // [3, 1]







// 2. filterRange(arr, a, b)
// function filterRange(arr, a, b) {
//     return arr
//         .map((n) => n <= b && n >= a ? n : null)
//         .filter(n => !!n); // убрать nulls
// }
// function filterRange(arr, a, b) {
//     return arr.filter(n => n >= a && n <= b); // убрать nulls
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (matching values)
// console.log( arr ); // 5,3,8,1 (not modified)





// 1. camelize(str)
// function camelize(str) {
//     return str.split('-')            
//       .map((word, i) => i == 0 ? word : word[0].toUpperCase() + word.slice(1))
//       .join('');
// }
// console.log(camelize("-webkit-transition"));
// console.log(camelize("background-color") == 'backgroundColor',
//             camelize("list-style-image") == 'listStyleImage',
//             camelize("-webkit-transition") == 'WebkitTransition');
