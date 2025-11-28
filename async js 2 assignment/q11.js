function greet(name, callback) {
  const message = "Hello, " + name;
  callback(message);
}

// example usage
greet("Masai", function (msg) {
  console.log(msg);
});