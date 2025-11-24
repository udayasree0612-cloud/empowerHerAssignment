// Example of block scoping with let
if (true) {
  let x = 10;
  console.log(x); // Output: 10
}
// console.log(x); // ReferenceError: x is not defined

// Example of optional chaining
const profile = {
  details: {
    email: 'alice@gmail.com'
  }
};

console.log(profile.details?.email); // Output: alice@gmail.com
console.log(profile.contact?.phone); // Output: undefined