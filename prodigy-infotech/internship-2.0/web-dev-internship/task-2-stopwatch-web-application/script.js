let startTime = 0;
let elapsedTime = 0;
let rafId = null;
let isRunning = false;
let lapCount = 0;

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const ms = milliseconds % 1000;

  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const centiseconds = Math.floor(ms / 10);

  if (hours > 0) {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms
      .toString()
      .padStart(2, "0")}`;
  }

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
}

function render() {
  document.querySelector(".minutes").textContent = formatTime(elapsedTime);
}

function tick() {
  const now = Date.now();
  elapsedTime = now - startTime;
  render();
  rafId = requestAnimationFrame(tick);
}

document.querySelector(".startBtn").onclick = function () {
  if (!isRunning) {
    const now = Date.now();
    startTime = now - elapsedTime;
    isRunning = true;
    rafId = requestAnimationFrame(tick);
  }
};

document.querySelector(".pauseBtn").onclick = function () {
  if (isRunning) {
    cancelAnimationFrame(rafId);
    isRunning = false;
  }
};

document.querySelector(".resetBtn").onclick = function () {
  if (rafId) cancelAnimationFrame(rafId);
  isRunning = false;
  elapsedTime = 0;
  startTime = 0;
  lapCount = 0;
  document.querySelector(".minutes").textContent = "00:00.00";

  const lapDisplay = document.querySelector(".lapDisplay");
  lapDisplay.style.display = "none";
  lapDisplay.innerHTML = "";
};

document.querySelector(".lapBtn").onclick = function () {
  if (isRunning) {
    lapCount++;

    const lapDisplay = document.querySelector(".lapDisplay");
    lapDisplay.style.display = "block";

    const lapEntry = document.createElement("div");
    lapEntry.innerHTML = `<strong>Lap ${lapCount}</strong>: ${formatTime(
      elapsedTime
    )}`;

    lapDisplay.appendChild(lapEntry);
  }
};

function yearDisplay() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

const year = yearDisplay();
document.querySelector(".yearDisplay").textContent = `${year}`;
