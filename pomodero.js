const time = {
  Pomodero: 25,
  Shortbreak: 5,
  longbreak: 15,
  second2:"00",
  button: "end",
  button1: "start",
};

// Function to format numbers
function string(time1) {
  let formattedNumber = String(time1);
  if (formattedNumber.length === 1) {
    formattedNumber = "0" + formattedNumber;
  }
  return formattedNumber;
}

// Selecting all the elements
let Pomodero = document.getElementById("pomodero");
let shortbreak = document.getElementById("shortbreak");
let longbreak = document.getElementById("longbreak");
let timing = document.querySelector(".timing");
let button = document.getElementById("button");
let seconds1 = document.querySelector(".seconds");
let sessions = document.getElementById("sessions");
let count;
let time2 = 0;
let toggle = true;
let remainingTime = 0;
let isPaused = false;

// Changing the background as it clicks on one of the buttons
Pomodero.addEventListener("click", () => {
  timing.textContent = time.Pomodero;
  document.body.style.backgroundColor = "#332941";
  clearInterval(count);
  seconds1.innerHTML = time.second2;
  button.textContent = time.button1; 
});

shortbreak.addEventListener("click", () => {
  timing.textContent = string(time.Shortbreak);
  document.body.style.backgroundColor = "#1E1E1E";
  clearInterval(count);
  seconds1.innerHTML = time.second2;
  button.textContent = time.button1;
});

longbreak.addEventListener("click", () => {
  timing.textContent = time.longbreak;
  document.body.style.backgroundColor = "#001E1E";
  clearInterval(count);
  seconds1.innerHTML = time.second2;
  button.textContent = time.button1;
});

// Button to start and stop
button.addEventListener("click", function fun () {
  if (toggle) {
    button.textContent = time.button;
    if (isPaused) {
      startp(remainingTime); // Resume countdown from remaining time
    } else {
      startp(parseInt(timing.textContent) * 60); // Start countdown from the beginning
    }
  } else {
    button.textContent = time.button1;
    clearInterval(count);
    remainingTime = (parseInt(timing.textContent) * 60) + parseInt(seconds1.textContent); // Store remaining time when paused
    isPaused = true;
  }
  toggle = !toggle;
});
// Program of the countdown timer
function startp(value) {
  clearInterval(count);
  let totalSeconds = value-1;
  count = setInterval(function () {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60 ;
    timing.innerHTML = string(minutes);
    seconds1.innerHTML = string(seconds);
    totalSeconds--;
    if (totalSeconds < 0) {
      clearInterval(count);
    }
    if (timing.innerHTML === "00" && seconds1.innerHTML === "00") {
      if (Pomodero.style.border !== "none") {
        Pomodero.style.border = "none";
        switchToShortBreak();
      } else if (shortbreak.style.border !== "none") {
        shortbreak.style.border = "none";
        switchTolongBreak();
      } else if (longbreak.style.border !== "none") {
        longbreak.style.border = "none";
        switchToPomodero();
        time2++;
        seethesessions(time2);
      }
    }
  },1000);
}
// Switch to short break
function switchToShortBreak() {
  timing.textContent = string(time.Shortbreak);
  document.body.style.backgroundColor = "#1E1E1E";
  seconds1.innerHTML = time.second2;
  button.textContent = time.button1;
  toggle = true;
  shortbreak.style.border = "1px solid #fff";
}

// Switch to long break
function switchTolongBreak() {
  timing.textContent = time.longbreak;
  document.body.style.backgroundColor = "#001E1E";
  seconds1.innerHTML = time.second2;
  button.textContent = time.button1;
  toggle = true;
  longbreak.style.border = "1px solid #fff";
}

// Switch to Pomodero
function switchToPomodero() {
  timing.textContent = time.Pomodero;
  document.body.style.backgroundColor = "#332941";
  seconds1.innerHTML = time.second2;
  button.textContent = time.button1;
  toggle = true;
  Pomodero.style.border = "1px solid #fff";
}

// Show the sessions
function seethesessions(session) {
  sessions.textContent = session;
}
