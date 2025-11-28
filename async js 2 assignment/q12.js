function timer(seconds, callback) {
  const ms = seconds * 1000;
  setTimeout(function () {
    callback("Timer of " + seconds + " seconds is over");
  }, ms);
}

// example usage
timer(3, function (msg) {
  console.log(msg);
});