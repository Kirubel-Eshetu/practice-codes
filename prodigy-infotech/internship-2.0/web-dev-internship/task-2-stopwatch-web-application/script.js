let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  document.querySelector(".minutes").textContent = formatTime(elapsedTime);
}

document.querySelector(".startBtn").onclick = function () {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 100);
    isRunning = true;
  }
};

document.querySelector(".pauseBtn").onclick = function () {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
};

document.querySelector(".resetBtn").onclick = function () {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  startTime = 0;
  document.querySelector(".minutes").textContent = "00:00";
};

document.querySelector(".lapBtn").onclick = function () {
  if (isRunning) {
    console.log("Lap time", formatTime(elapsedTime));
  }
};
