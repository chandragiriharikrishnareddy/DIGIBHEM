const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('laps');

let startTime;
let elapsedTime = 0;
let timerInterval;

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;
    let minutes = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    let seconds = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${milliseconds}`;
}

function updateTime() {
    const elapsedTimeNow = Date.now() - startTime + elapsedTime;
    hoursDisplay.textContent = pad(Math.floor(elapsedTimeNow / 3600000));
    minutesDisplay.textContent = pad(Math.floor((elapsedTimeNow % 3600000) / 60000));
    secondsDisplay.textContent = pad(Math.floor((elapsedTimeNow % 60000) / 1000));
    millisecondsDisplay.textContent = pad(elapsedTimeNow % 1000);
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 10);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    lapBtn.disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
    elapsedTime = 0;
    hoursDisplay.textContent = '00';
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '000';
    lapsList.innerHTML = '';
}

function lapTimer() {
    const lapTime = formatTime(Date.now() - startTime + elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
