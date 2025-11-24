// Step 1: Create an array of objects
const students = [
  { name: "John", grade: 80 },
  { name: "Jane", grade: 95 },
  { name: "Tom", grade: 60 }
];

// Step 2: Filter the students with grade > 70
const passedStudents = students.filter(student => student.grade > 70);

// Step 3: Print result
console.log(passedStudents);
// Output: [ { name: "John", grade: 80 }, { name: "Jane", grade: 95 } ]