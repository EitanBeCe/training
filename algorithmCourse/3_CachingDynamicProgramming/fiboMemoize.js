// Fibo memoization

let calculations = 0;
function fibonacciRecursive(n) { // O(2^n)
    calculations++;

    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
}

// console.log(fibonacciRecursive(8));

function fibonacciMaster() { // O(n)
    let cache = {};

    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}