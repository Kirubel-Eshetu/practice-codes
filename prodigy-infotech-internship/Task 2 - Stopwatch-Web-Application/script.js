const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopButton.textContent = 'Start';
        startStopButton.classList.add('paused');
    } else {
        interval = setInterval(updateTime, 10);
        startStopButton.textContent = 'Pause';
        startStopButton.classList.remove('paused');
    }
    isRunning = !isRunning;
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
    millisecondsDisplay.textContent = pad(milliseconds / 10);
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function reset() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '00';
    startStopButton.textContent = 'Start';
    isRunning = false;
    lapsList.innerHTML = '';
    startStopButton.classList.remove('paused');
}

function lap() {
    if (isRunning) {
        const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds / 10)}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsList.appendChild(lapItem);
    }
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);