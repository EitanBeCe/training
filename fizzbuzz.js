
// for (let i = 0; i < 100; i++) {
//     if (!(i % 3) && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (!(i % 5)) {
//         console.log('Fizz');
//     } else if (i % 3 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


for (let i =1; i<101;i++) {
    i % 15 === 0 ? console.log('FizzBuzz') :
    i % 5 === 0 ? console.log('Buzz') :
    i % 3 === 0 ? console.log('Fizz') :
    console.log(i);
}


let arr = Array(100); // empty arr 100
arr = [...Array(100).keys()]; // arr 0-99 nums
arr = [...Array(100).keys()].map(n => n+1); // 1-100
arr = [...Array(100).keys()]
                    .map(n => n+1)
                        .map((n) => (n%3 ? '' : 'Fizz') + (n%5 ? '' : 'Buzz') || n)
                    .join('\n');
console.log(arr);
