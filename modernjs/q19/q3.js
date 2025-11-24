const original = {a: 1, b: 2};
const copy = {...original, c: 3};
console.log(copy); // Output: { a: 1, b: 2, c: 3 }

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // Output: 6