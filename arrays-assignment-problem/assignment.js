// Tasks are in index.html.

const arr = [1, 3, 5, 5, 6, 7, 8];

const task1 = arr
  .filter((num) => num > 5)
  .map((num, i) => {
    return { num };
  })
  .reduce((prev, curr) => prev * curr.num, 1);
console.log(task1);

const findMax = (...arr) => {
  return [Math.max(...arr), Math.min(...arr)];
};
const [max, min] = findMax(...arr);
console.log(max, min);

const set = new Set(arr);
console.log(set);
