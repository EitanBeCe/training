function fibonacciIterative(n) {
    let arr = [0, 1];

    for (let i = 2; i < n+1; i++) { // O(n)
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[n]
}

console.log(fibonacciIterative(8));



function fibonacciRecursive(n) { // O(2^n) vary bad
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
}

console.log(fibonacciRecursive(8));