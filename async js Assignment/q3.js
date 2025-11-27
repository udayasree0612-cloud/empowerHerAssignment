let count = 0;

const intervalId = setInterval(function () {
  count++;
  console.log("Loading...");

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Loaded!");
  }
}, 1000);