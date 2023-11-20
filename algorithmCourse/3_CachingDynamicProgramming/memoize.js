function addTo80 () {
    console.log("long time calculation");
    return n + 80;
}

function memoizeAddTo80() {
    let cache = {};

    return function(n) { // Needed for usage of cache{} inside the function, and not to put it in global scope
        if (n in cache) {
            return cache[n];
        } else {
            console.log("long time calculation");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizeAddTo80();

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(6));
console.log(memoized(6));