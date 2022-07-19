'use strict';

// https://www.fullstack.cafe/interview-questions/javascript





// 7. sum of odd
// function oddSum(arr) {
//     return arr.reduce((sum, curr) => curr % 2 === 0 ? sum + curr : sum, 0);
// }
// console.log(oddSum([1, 2, 3, 4, 5]));

// function oddSum(arr) {
//     let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]%2 === 0 ? arr[i] : 0;
//     }
//     return sum;
// }
// console.log(oddSum([1, 2, 3, 4, 5]));




//6 whats devisible by 3
// function div3(l, h) {
// 	let arr = [];
// 	for (let i = l; i < h; i++) {
// 		if (Number.isInteger(i / 3)) {
// 			arr.push(`${i}div3`);
// 		} else {
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
// }

// console.log(div3(1, 10));





// //5 sum of arr in arr
// function sum(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i].reduce((sum, curr) => sum + curr, 0);
		
// 	}
// 	return sum;
// }
// console.log(sum([[1,2],[3,4],[5,6]]));

// function sum(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			sum += arr[i][j];			
// 		}
		
// 	}
// 	return sum;
// }

// console.log(sum([[1,2],[3,4],[5,6]]));





// 4 is sum of 3 close nums = 7?
// function sum7(arr) {
// 	for (let i = 0; i < arr.length - 2; i++) {
// 		if (arr[i] + arr[i+1] + arr[i+2] === 7) {
// 			return i+1;
// 		}
		
// 	}
// }

// console.log(sum7([1,2,3,4,5,6]));
// console.log(sum7([1,1,5,4,5,6]));
// console.log(sum7([1,2,4,5,6]));










// CODEWARS

// how many people love your post?
// function likes(names) {

// 	let othersNum = names.length - 2;

// 	if (names.length === 0) {
// 		return "no one likes this";
// 	} else if (names.length === 1) {
// 		return `${names[0]} likes this`;
// 	} else if (names.length === 2) {
// 		return `${names[0]} and ${names[1]} like this`;
// 	} else if (names.length === 3) {
// 		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// 	} else if (names.length > 3) {
// 		return `${names[0]}, ${names[1]} and ${othersNum} others like this`;
// 	}
// }

// console.log(likes([]));
// console.log(likes(["Max"]));
// console.log(likes(["Max", "John"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"] ));