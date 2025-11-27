function startCountdown(seconds) {
  let remaining = seconds;

  const intervalId = setInterval(function () {
    console.log(remaining);
    remaining--;

    if (remaining === 0) {
      console.log("Time's up!");
      clearInterval(intervalId);
    }
  }, 1000);
}

// Example: start a 5‑second countdown
startCountdown(5);