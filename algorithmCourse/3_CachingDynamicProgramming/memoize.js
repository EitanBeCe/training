function addTo80 () {
    console.log("long time calculation");
    return n + 80;
}

let cache = {};

function memoizeAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log("long time calculation");
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log(memoizeAddTo80(5));
console.log(memoizeAddTo80(5));
console.log(memoizeAddTo80(6));
console.log(memoizeAddTo80(6));
console.log(memoizeAddTo80(6));