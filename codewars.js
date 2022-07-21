'use strict';


// https://www.codewars.com/kata/54dc6f5a224c26032800005c

function stockList(list, listCheck){
    let counterA = 0;
    let counterB = 0;
    let counterC = 0;
    let counterD = 0;
    // console.log(list[4][0]);
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < listCheck.length; j++) {
            switch (list[i][0] === listCheck[j]) {
                case list[i][0] === 'B':
                    counterB += +list[i].slice(-3);
                    break;
                case list[i][0] === 'C':
                    counterC += +list[i].slice(-3);
                    break;
                case list[i][0] === 'D':
                    counterD += +list[i].slice(-3);
                    break;
                case list[i][0] === 'A':
                    counterA += +list[i].slice(-3);
                    break;
                default:
                    break;
            }   
        }
    }
    return `(A : ${counterA}) - (B : ${counterB}) - (C : ${counterC}) - (D : ${counterD})`;
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], 
                                        ["A", "B", "C", "D"]));
// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// c = ["A", "B"];
// stockList(b, c);