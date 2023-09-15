// 3! === 3*2*1

function factorialRecursive(num) {
    if (num === 2) {
        return 2;
    }

    return num * factorialRecursive(num-1);
}

console.log(factorialRecursive(5));



function factorialIterative(num) {
    let sum = 1;

    for (let i = num; i > 1; i--) {
        sum = sum * i;
    }

    return console.log(sum);
}

factorialIterative(3)