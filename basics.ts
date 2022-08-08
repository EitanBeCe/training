let age: number;
age = 5;

// I want arr of strings
let hobbies: string[];

// Obj with ...
let person: {
  name: string;
  age: number;
};
person = {
  name: "Max",
  age: 32,
};
// Arr of such objects
let people: {
  name: string;
  age: number;
}[];

// Type inference
// Will be only able as a string. Already typed
// Better to use this way, instead writing types all the time
let coursee = "React - The Complete Guide";

// Union types
let course: string | number = "React - The Complete Guide";

course = 12341;

// Type aliases
// To not duplicate
type Persone = {
  name: string;
  age: number;
};

let persone: Persone;
let peoplee: Persone[];

// Functions & types

// Func should return num. But its not needed here
function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

// Check which args are coming on func call. Its numbers, so split will not work (its for strings)
// And both args should be of the same type. But the func is still flexible for different types
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('');
