'use strict';

function likes(names) {

	let othersNum = names.length - 2;

	if (names.length === 0) {
		return "no one likes this";
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else if (names.length > 3) {
		return `${names[0]}, ${names[1]} and ${othersNum} others like this`;
	}
}

console.log(likes([]));
console.log(likes(["Max"]));
console.log(likes(["Max", "John"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"] ));
