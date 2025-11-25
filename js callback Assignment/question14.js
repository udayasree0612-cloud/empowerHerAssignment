function evaluateEmployees(employees) {

  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  const mapped = filtered.map(({ name, rating }) => {
    const performance =rating > 4.5? "Excellent": rating >= 3? "Good": "Needs Improvement";

    return { name, performance };
  });

  const priority = {
    Excellent: 1,
    Good: 2,
    "Needs Improvement": 3
  };

  const sorted = mapped.sort(
    (a, b) => priority[a.performance] - priority[b.performance]
  );

  return sorted;
}

const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 5, rating: 2.8 }
];

console.log(evaluateEmployees(employees));