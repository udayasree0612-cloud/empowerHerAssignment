// Arrow function and regular function to show 'this' difference
const obj = {
  value: 42,
  regFunc: function() {
    return this.value;
  },
  arrowFunc: () => {
    return this.value;
  }
};

console.log(obj.regFunc());   // Output: 42
console.log(obj.arrowFunc()); // Output: undefined (arrow functions do not bind 'this')