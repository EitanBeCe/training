'use strict';


// https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript
const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
const lipsu = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. ';

function justify(text, width) {
  const words = text.trim().split(' ')
  const lines = []
  let line = ''
  let lineLen = 0

  for (let index = 0; index < words.length; index++) {
    const word = words[index]

    // console.log(word);
    // console.log(lineLen + word.length);
    

    if ((lineLen + word.length + 1) < width) {
      // Add word
      if (line.length === 0) {
        line = word
      } else {
        line += ' ' + words[index]
      }

      lineLen = line.length

      // console.log(lineLen < width);
    } else {
      lines.push(line)
      line = ''
      lineLen = 0
      index--
    }

    // console.log(lineLen);
  }

  if (line) lines.push(line);

  // console.log(lines);
  // console.log(lines[0].length);

  // return text
}

justify(lipsu, 30)


// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// function humanReadable (seconds) {
//   const addZero = (num) => num.toString().length === 1 ? `0${num}` : num

//   const milliseconds = seconds * 1000,
//         secondsVal = addZero(new Date(milliseconds).getSeconds()),
//         minutes = addZero(new Date(milliseconds).getMinutes()),
//         hours = addZero(Math.floor(seconds / 60 / 60));

//   return `${hours}:${minutes}:${secondsVal}`;
// }
// console.log(humanReadable(86499));



// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript
// Find anagrams
// const anagrams = (word, arr) => {
//   let newArr = [];
//   let sortedWord = word.split("").sort().join("");
//   for (let w of arr) {
//     let sortedNewWord = w.split("").sort().join("");
//     if (sortedNewWord === sortedWord) {
//       newArr.push(w);
//     }
//   }
//   return newArr;
// };
// anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]); // => ['aabb', 'bbaa']
// anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]); // => ['carer', 'racer']
// anagrams("laser", ["lazing", "lazy", "lacer"]); // => []

//
//
// https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
// 5 kuy
// const lastDigit = function (str1, str2) {
// console.log((str1 ** str2).toString().slice(-1));
// console.log(4444 % 10);
// return (str1 ** str2).toString().slice(-1); // Doesn't work with big nums
// };
// lastDigit("4", "1"); // returns 4
// lastDigit("4", "2"); // returns 6
// lastDigit("9", "7"); // returns 9
// lastDigit("10", "10000000000"); // returns 0

//
//
// https://www.codewars.com/kata/57a60bad72292d3e93000a5a
// Make acronym. Code wars -> C, w -> C W -> CW
// const toAcronym = (inp) =>
//   inp.split` `.map((word) => word.slice(0, 1).toUpperCase()).join``;
// console.log(toAcronym('Code Wars')); // "CW"

//
//
//https://www.codewars.com/kata/5ba178be875de960a6000187/train/javascript
// function findLowestInt(k) {
//   let k2 = k + 1;
//   const sorty = (num, mul) => {
//     return (num * mul).toString().split('').sort().join('');
//   };

//   for (let i = 1; i < 1000000000; i++) {
//     if (sorty(k, i) === sorty(k2, i)) {
//       return i;
//     }
//   }
//   return 'Not found';
// }
// console.log(findLowestInt(100)); //8919
// console.log(findLowestInt(325)); //477

//
//
// https://www.codewars.com/kata/5ba178be875de960a6000187

//
//
// function stockList(list, listCheck){
//     let counterA = 0;
//     let counterB = 0;
//     let counterC = 0;
//     let counterD = 0;
//     // console.log(list[4][0]);
//     for (let i = 0; i < list.length; i++) {
//         for (let j = 0; j < listCheck.length; j++) {
//             if (list[i][0] === listCheck[j]) {
//                 switch (list[i][0]) {
//                     case 'A':
//                         counterA += +list[i].slice(-3);
//                         break;
//                     case 'B':
//                         counterB += +list[i].slice(-3);
//                         break;
//                     case 'C':
//                         counterC += +list[i].slice(-3);
//                         break;
//                     case 'D':
//                         counterD += +list[i].slice(-3);
//                         break;
//                     default:
//                         break;
//                 }
//             }
//         }
//     }
//
//     let res = `(A : ${counterA}) - (B : ${counterB}) - (C : ${counterC}) - (D : ${counterD})`;
//     if (counterC === 0 && counterD === 0) {
//         return res.slice(0,23);
//     }
//     return res;
// }
// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//                                         ["A", "B", "C", "D"]));
// let b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// let c = ["A", "B"];
// console.log(stockList(b, c));

// function stockList(list, listCheck){
//     let counterA = 0;
//     let counterB = 0;
//     let counterC = 0;
//     let counterD = 0;
//     // console.log(list[4][0]);
//     for (let i = 0; i < list.length; i++) {

//                 switch (list[i][0]) {
//                     case 'A':
//                         counterA += +list[i].slice(-3);
//                         break;
//                     case 'B':
//                         counterB += +list[i].slice(-3);
//                         break;
//                     case 'C':
//                         counterC += +list[i].slice(-3);
//                         break;
//                     case 'D':
//                         counterD += +list[i].slice(-3);
//                         break;
//                     default:
//                         break;
//                 }

//     }
//     return `(A : ${counterA}) - (B : ${counterB}) - (C : ${counterC}) - (D : ${counterD})`;
// }

// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//                                         ["A", "B", "C", "D"]));

// function stockList(list, listCheck){
//     let counterA = 0;
//     let counterB = 0;
//     let counterC = 0;
//     let counterD = 0;
//     // console.log(list[4][0]);
//     for (let i = 0; i < list.length; i++) {

//                 switch (list[i][0]) {
//                     case listCheck[0]:
//                         counterA += +list[i].slice(-3);
//                         break;
//                     case listCheck[1]:
//                         counterB += +list[i].slice(-3);
//                         break;
//                     case listCheck[2]:
//                         counterC += +list[i].slice(-3);
//                         break;
//                     case listCheck[3]:
//                         counterD += +list[i].slice(-3);
//                         break;
//                     default:
//                         break;
//                 }
//     }
//     let res = `(A : ${counterA}) - (B : ${counterB}) - (C : ${counterC}) - (D : ${counterD})`;
//     if (counterC === 0 && counterD === 0) {
//         return res.slice(0,22);
//     }
//     if (listCheck[0] !== 'A') {
//         let res2 = res.replace('A', listCheck[0]);
//         return res2;
//     }
//     if (listCheck[1] !== 'B') {
//         let res2 = res.replace('B', listCheck[1]);
//         return res2;
//     }
//     if (listCheck[2] !== 'C') {
//         let res2 = res.replace('C', listCheck[2]);
//         return res2;
//     }
//     if (listCheck[3] !== 'D') {
//         let res2 = res.replace('D', listCheck[3]);
//         return res2;
//     }
//     return `(A : ${counterA}) - (B : ${counterB}) - (C : ${counterC}) - (D : ${counterD})`;
// }

// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//                                         ["A", "B", "C", "W"]));
// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// c = ["A", "B"];
// stockList(b, c);

//
//
// // https://www.codewars.com/kata/56ba65c6a15703ac7e002075/train/javascript
// function findNextPower(val, pow_) {
//   return Math.ceil(Math.ceil(val ** (1 / pow_)) ** pow_);
// }
// findNextPower(12385, 3); // == 13824
// findNextPower(1245678, 5); // == 1419857

//
//
// // https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript
// 1
// function modifyMultiply(str, i, n) {
//   console.log(Array(n).fill(str.split(" ")[i]).join("-"));
// }
// modifyMultiply("This is a string", 3, 5);

// 2
// const modifyMultiply = (str, index, mul) => {
//   const arrStr = str.split(" ");
//   let res = "";
//   for (let i = 0; i < mul; i++) {
//     res += "-" + arrStr[index];
//   }
//   console.log(res.slice(1));
//   return res.slice(1);
// };
// modifyMultiply("This is a string", 3, 5); // => "string-string-string-string-string"
