// This is not fully completed
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
  document.body.style.backgroundColor = "orange";
  clearInterval(count);
  seconds1.innerHTML = "00";
  button.textContent = time.button1;
});
longbreak.addEventListener("click", () => {
  timing.textContent = time.longbreak;
  document.body.style.backgroundColor = "coral";
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
    let minutes = parseInt(totalminutes / 60);
    let seconds = totalminutes % 60;
    timing.innerHTML = string(minutes);
    seconds1.innerHTML = string(seconds);
    totalminutes--;
    if (totalminutes < 0) {
      clearInterval(count);
    }
    // if (timing.innerHTML==="00"&&seconds1.innerHTML==="00") {
    //   console.log("shzdjkl")
    //   button.textContent = time.button1;
    //   location.reload();
    // }
  });
}
