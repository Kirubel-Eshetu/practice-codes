let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

function formatTime(milliseconds){
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    document.querySelector('.minutes').textContent = formatTime(elapsedTime);
}

document.querySelector(".startBtn").onclick = function() {
    
};

document.querySelector(".pauseBtn").onclick = function() {
    
};

document.querySelector(".resetBtn").onclick = function() {
    
};

document.querySelector(".lapBtn").onclick = function (){
    
};