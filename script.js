//Initializing Variables
let timerDisplay = document.querySelector(".timerDisplay");
let startBtn = document.querySelector("#start-btn");
let stopBtn = document.querySelector("#stop-btn");
let resetBtn = document.querySelector("#reset-btn");
let msec = 00;
let secs = 00;
let mins = 00;
let timerId = null;

//Addind events to buttons
startBtn.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00 `;
  msec = secs = mins = 00;
});

//Function foe star timer
function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
  }

  if (secs == 60) {
    secs = 0;
    mins++;
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
