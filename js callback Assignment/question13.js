function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));
function getSortedCategories(categories) {
  const countObj = countCategories(categories);

  return Object.entries(countObj)      
    .sort((a, b) => b[1] - a[1])       
    .map(([category]) => category);    
}
console.log("Sorted :",getSortedCategories(input));