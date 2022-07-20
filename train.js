'use strict';

// https://www.fullstack.cafe/interview-questions/javascript



// // // 15. Remove duplicates of an array and return an array of only unique elements  
// const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// // let set = new Set(array);
// // console.log(set);

// ///// WAS LONGER
// const sortedArr = array.sort((a, b) => a - b);
// const uniqueNumsArr = [];
// for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === sortedArr[i+1]) {
//         sortedArr.splice(i, 1);
//         i--;
//     }
// }
// console.log(array);









// // 14. Find the missing number in arr
// //  Being told that an unsorted array contains (n - 1) of n consecutive numbers 
// //  (where the bounds are defined), find the missing number in O(n) time
// function missingNum(arr) {
//     return arr.sort((a, b) => a - b)
//                 .map((num, i, arr) => 
//                                                 //исключить последнее в массиве
//                     ( (arr[i+1] - arr[i] === 1) || (i !== arr.length-2) ) ?
//                         0 : num + 1)
//                 .reduce((a, b) => a + b);



//     // let newArr = [];
//     // console.log(sortedArr);
    
//     // for (let i = 0; i < sortedArr.length; i++) {
//     //     console.log(sortedArr[i+1] - sortedArr[i]);

//     //     if (sortedArr[i+1] - sortedArr[i] === 1) {
//     //         newArr.push(sortedArr[i]);
//     //     } else {
//     //         newArr.push(sortedArr[i]); 
//     //         newArr.push(sortedArr[i] + 1);
//     //     }
//     // }
//     // return newArr;    
// }
// console.log(missingNum([2, 5, 1, 4, 9, 6, 3, 7]));



// make an array full of consecutive numbers where 1 is missing
// function missingNum(arr) {
//     let sortedArr = arr.sort((a, b) => a - b);
//     let newArr = [];
//     console.log(sortedArr);
    
//     for (let i = 0; i < sortedArr.length; i++) {
//         console.log(sortedArr[i+1] - sortedArr[i]);

//         if (sortedArr[i+1] - sortedArr[i] === 1) {
//             newArr.push(sortedArr[i]);
//         } else {
//             newArr.push(sortedArr[i]); 
//             newArr.push(sortedArr[i] + 1);
//         }
//     }
//     return newArr;    
// }
// console.log(missingNum([2, 5, 1, 4, 9, 6, 3, 7]));






// // 13. Given a string, reverse each word in the sentence  
// function reverseWords(str) {
//     return str.split(' ')
//         .map((word) => 
//             word.split('')
//             .reverse()
//             .join(''))
//         .join(' ');
// }
// console.log(reverseWords('Welcome to this Javascript Guide!'));




// // 10. Return the N-th value of the Fibonacci sequence Recursively
// function fib(n) {
//     if (n < 2) {
//         return n;
//     } else {
//         return fib(n-2) + fib(n-1);
//     }
// }
// console.log(fib(4));




// 9. Return the N-th value of the Fibonacci sequence.
// function fib(n) {
//     let arr = [0, 1];
//     for (let i = 2; i < n + 1; i++) {
//         arr.push(arr[i-2] + arr[i-1]);
//     }
//     return arr[n];
// }
// console.log(fib(4));





// // 8. Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD.
// function rotation(a, b) {
//     return a.length === b.length && (a + a).indexOf(b) > -1;
// }
// console.log(rotation('ABCD', 'BCDA'));




// 7 Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
// function sumPlusOneEach(arr) {
//     // let sum = 0;
//     // for(let num of arr) {
//     //     sum += num + 1;
//     // }
//     // return sum;

//     // for(let num of arr) {
//     //     sum += num;
//     // }
//     // return sum + arr.length;

//     return arr.reduce((s, c) => s + c) + arr.length;
// }
// console.log(sumPlusOneEach([1, 2, 3]));





// 6. sum of odd
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