'use strict';

// https://www.fullstack.cafe/interview-questions/javascript









// // Q26: Stock maximum profit
// // Find the largest difference between nums in arr, но меньший дб раньше большего в массиве  
// // For example if the input is:
// // [45, 24, 35, 31, 40, 38, 11] 
// // then your program should return 16 because if you bought the stock at $24 and sold it at $40, 
// // a profit of $16 was made 
// // and this is the largest profit that could be made. If no profit could have been made, return -1.
// function diff(arr) {
//     let maxProfit = -1;
//     let buyPrice = 0;
//     let sellPrice = 0;

//     let changeBuyIndex = true;

//     for (let i = 0; i < arr.length-1; i++) {
    
//         sellPrice = arr[i+1];

//         if (changeBuyIndex) {buyPrice = arr[i];}

//         if (sellPrice < buyPrice) {
//             changeBuyIndex = true;
//             continue;
//         } else {
//             let tempProfit = sellPrice - buyPrice;
//             if (tempProfit > maxProfit) { maxProfit = tempProfit; }
//             changeBuyIndex = false;
//         }
//     }
//     return maxProfit;
// }
// console.log(diff([45, 24, 35, 31, 40, 38, 11]));














// // Q25: Determine overlapping numbers in ranges
// // If the array is [10, 20,  4, 14,  4] then the ranges are:
// // 10 11 12 13 14 15 16 17 18 19 20
// // 4 5 6 7 8 9 10 11 12 13 14
// // These ranges overlap by at least 4 numbers, namely: 10, 11, 12, 13, 14 so your program should return true.



// // how much do they overlap
// function overlap(arr) {
//     if (arr[0] - arr[3] + 1 >= arr[4]) {
//         return arr[3] - arr[0] + 1;
//     }
//     if (arr[1] - arr[2] + 1 >= arr[4]) {
//         return arr[1] - arr[2] + 1;
//     }
// }
// console.log(overlap([ 4, 14, 10, 20, 4]));



// function overlap(arr) {
//     return arr[0] - arr[3] + 1 >= arr[4] ||
//             arr[1] - arr[2] + 1 >= arr[4];
// }
// console.log(overlap([ 4, 14, 10, 20, 4]));



// function overlap(arr) {
//     let counter = 0;
//     for (let i = arr[0]; i < arr[1]; i++) {
//         if (i >= arr[2] && i <= arr[3]) {
//             counter++;
//         }
//     }
//     return counter >= arr[4];
// }
// console.log(overlap([10, 20,  4, 14, 4]));



// function overlap(arr) {
//     let arr1 = [], arr2 = [];
//     let counter1 = 0;
//     let counter2 = 0;
//     let counter3 = 1;
//     // create arr1
//     for (let i = arr[0]; i < arr[1]; i++) {
//         arr1.push(arr[0] + counter1);
//         counter1++;
//     }
//     // create arr2
//     for (let i = arr[2]; i < arr[3]; i++) {
//         arr2.push(arr[2] + counter2);
//         counter2++;
//     }
//     // check overlap
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             counter3++;
//         } 
//     }
//     return counter3 >= arr[4];
// }
// console.log(overlap([10, 20,  4, 14, 4]));














// // Q24: Two sum problem 
// // Given an integer x and a sorted array a of N distinct integers, 
// // design a linear-time algorithm to determine if 
// //there exists two distinct indices i and j such that a[i] + a[j] == x
// // For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, 
// // your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
// function toSum(arr, n) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {  
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === n) {
//                 newArr.push([arr[i], arr[j]]);
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return newArr;
// }
// console.log(toSum([3, 5, 2, -4, 8, 11], 7));










// // Q23: Make this work  
// // duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// function duplicate(arr) {
//     return [...arr, ...arr];
// }
// console.log(duplicate([1, 2, 3, 4, 5]));

// function duplicate(arr) {
//     return arr.concat(arr);
// }
// console.log(duplicate([1, 2, 3, 4, 5]));












// // Q20: Write a function that would allow you to do this? 
// // var addSix = createBase(6);
// // addSix(10); // returns 16
// // addSix(21); // returns 27
// function createBase(base) {
//     return (num) => base + num; 
// }
// let addSix = createBase(6);
// console.log(addSix(10)); // returns 16
// console.log(addSix(21)); // returns 27











// // 19.   write mul:
// //console.log(mul(2)(3)(4)); // output : 24
// //console.log(mul(4)(3)(4)); // output : 48
// function mul(a) {
//     return (b) => (c) => a*b*c; 
// }
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48







// // // 15. Remove duplicates of an array and return an array of only unique elements  
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// // let set = new Set(array);
// // console.log(set);


// const sortedArr = [...array];
// sortedArr.sort((a, b) => a - b);

// for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === sortedArr[i+1]) {
//         sortedArr.splice(i, 1);
//         i--;
//     }
// }
// console.log(sortedArr);



// const sortedArr = array.filter((n, i, array) => array.indexOf(n) === i);
// console.log(sortedArr);









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