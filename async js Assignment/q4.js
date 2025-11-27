console.log("Script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise then");
});

console.log("Script end");