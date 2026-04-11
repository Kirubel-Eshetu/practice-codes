console.log("Stopwatch-web-application done!")

let startTime = 0;
let elapsedTime = 0;
let rafId = null;
let isRunning = false;
let lapCount = 0;
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const lapDisplay = document.querySelector(".lapDisplay");


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

function startTimer() {
  if (!isRunning) {
    const now = Date.now();
    startTime = now - elapsedTime;
    isRunning = true;
    rafId = requestAnimationFrame(tick);
    pauseBtn.textContent = "Pause";
  }
}

function pauseTimer() {
  if (isRunning) {
    cancelAnimationFrame(rafId);
    isRunning = false;
    pauseBtn.textContent = "Resume";
    startBtn.style.display = "none";
  } else {
    startTimer();
  }
}

document.querySelector(".startBtn").onclick = function () {
  startTimer();
};

document.querySelector(".pauseBtn").onclick = function () {
  pauseTimer();
};

document.querySelector(".resetBtn").onclick = function () {
  if (rafId) cancelAnimationFrame(rafId);
  isRunning = false;
  elapsedTime = 0;
  startTime = 0;
  lapCount = 0;
  document.querySelector(".minutes").textContent = "00:00.00";
  startBtn.style.display = "inline";
  pauseBtn.textContent = "Pause";

  lapDisplay.style.display = "none";
  lapDisplay.innerHTML = "";
};

document.querySelector(".lapBtn").onclick = function () {
  if (isRunning) {
    lapCount++;

    lapDisplay.style.display = "block";

    const lapEntry = document.createElement("div");
    lapEntry.innerHTML = `<strong>Lap ${lapCount}</strong>: ${formatTime(
      elapsedTime
    )}`;

    lapDisplay.appendChild(lapEntry);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".operations button, .lapContainer button")
    .forEach((btn) => {
      btn.textContent = btn.textContent
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
    });
});

function yearDisplay() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

const year = yearDisplay();
document.querySelector(".yearDisplay").textContent = `${year}`;
