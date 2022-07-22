'use strict';


// https://www.codewars.com/kata/54dc6f5a224c26032800005c




const store = l.reduce((acc, inventory) => {
    const [[code], qty] = inventory.split(" ");
    const stock = (acc[code] || 0) + Number(qty);
    return {
      ...acc,
      [code]: stock
    }
  }, {});
  
  const counts = m.reduce((result, key) => ({
    ...result,
    [key]: store[key] || 0
  }), {})
  
  const print = obj => Object.entries(obj)
      .map(([k, v]) => `(${k} : ${v})`)
      .join(" - ");
  
  console.log(print(counts));





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
//     //костыль подгона под их ответ, которые не соответствует вроде запросу задания
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