console.log("Message 1"); // immediately

setTimeout(function () {
  console.log("Message 2"); // after 2 seconds
}, 2000);

setTimeout(function () {
  console.log("Message 3"); // after 4 seconds
}, 4000);