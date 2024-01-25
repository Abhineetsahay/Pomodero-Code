const time = {
  Pomodero: 25,
  Shortbreak: 5,
  longbreak: 15,
  button: "end",
  button1: "start",
};
//gets a 0 in front of a number
function string(time1) {
  let formattedNumber = String(time1);
  if (formattedNumber.length === 1) {
    formattedNumber = "0" + formattedNumber;
  }
  return formattedNumber;
}
//selecting all the elements
let Pomodero = document.getElementById("pomodero");
let shortbreak = document.getElementById("shortbreak");
let longbreak = document.getElementById("longbreak");
let timing = document.querySelector(".timing");
let button = document.getElementById("button");
let seconds1 = document.querySelector(".seconds");
let count;
let time2 = 0;
let sessions=document.getElementById("sessions");
let toggle = true;
//changing the background as it clicks on the on of the button;
Pomodero.addEventListener("click", () => {
  timing.textContent = time.Pomodero;
  document.body.style.backgroundColor = "#332941";
  clearInterval(count);
  seconds1.innerHTML = "00";
  button.textContent = time.button1;
});
shortbreak.addEventListener("click", () => {
  timing.textContent = string(time.Shortbreak);
  document.body.style.backgroundColor = "#1E1E1E";
  clearInterval(count);
  seconds1.innerHTML = "00";
  button.textContent = time.button1;
});
longbreak.addEventListener("click", () => {
  timing.textContent = time.longbreak;
  document.body.style.backgroundColor = "#001E1E";
  clearInterval(count);
  seconds1.innerHTML = "00";
  button.textContent = time.button1;
});
//button to start and stop
button.addEventListener("click", function () {
  if (toggle) {
    button.textContent = time.button;
    startp(parseFloat(timing.innerHTML));
  } else {
    button.textContent = time.button1;
    clearInterval(count);
  }
  toggle = !toggle;
});
//program of the countdown timer
function startp(value) {
  clearInterval(count);
  let totalminutes = value * 60;
  count = setInterval(function () {
    let minutes = Math.floor((totalminutes % 3600) / 60);
    let seconds = totalminutes % 60;
    timing.innerHTML = string(minutes);
    seconds1.innerHTML = string(seconds);
    totalminutes--;
    if (totalminutes < 0) {
      clearInterval(count);
    }
    if (timing.innerHTML === "00" && seconds1.innerHTML === "00") {
      console.log("dsj");
      if (Pomodero.style.border !== "none") {
        Pomodero.style.border = "none";
        switchToShortBreak();
      } else if (shortbreak.style.border !== "none") {
        shortbreak.style.border = "none";
        switchTolongBreak();
      }
      else if(longbreak.style.border!=="none"){
        longbreak.style.border = "none";
        switchToPomodero();
        time2++;
        console.log(time2);
        seethesessions(time2);
      }
    }
  },1000);
}
//here it will automatically switch to shortbreak and to long breal when the timer reaches 00:00
function switchToShortBreak() {
  timing.textContent = string(time.Shortbreak);
  document.body.style.backgroundColor = "#1E1E1E";
  seconds1.innerHTML = "00";
  button.textContent = time.button1;
  toggle = true;
  shortbreak.style.border = "1px solid #fff";
}
function switchTolongBreak() {
  timing.textContent = time.longbreak;
  document.body.style.backgroundColor = "#001E1E";
  seconds1.innerHTML = "00";
  button.textContent = time.button1;
  toggle = true;
  longbreak.style.border = "1px solid #fff";
}
function switchToPomodero() {
  timing.textContent = time.Pomodero;
  document.body.style.backgroundColor = "#332941";
  seconds1.innerHTML = "00";
  button.textContent = time.button1;
  toggle = true;
  Pomodero.style.border = "1px solid #fff";
}
//here we can see the sessions we did in a day
function seethesessions(session){
  sessions.innerHTML=session;
}