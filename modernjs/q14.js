// Step 1: Create two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Step 2: Merge objects using spread
const mergedObj = { ...obj1, ...obj2 };

// Step 3: Modify a property value
mergedObj.b = 5;

// Step 4: Print result
console.log(mergedObj);
// Output: { a: 1, b: 5, c: 4 }