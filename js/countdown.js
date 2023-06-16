function countDown() {
  var timer;
  var x = timerdiv.textContent.split(":");
  var hours = Number(x[0]) > 60 ? Math.floor(Number(x[0]) / 60) : 0;
  var minutes = Number(x[0]) % 60;
  var seconds = x[1];
  info.textContent == "Working" ? value3(1, workingV) : {};

  myInterval = setInterval(function () {
    if (minutes == 0) {
      if (hours != 0) {
        minutes = 59;
        hours--;
      }
    }
    if (seconds == 0) {
      if (minutes != 0) {
        seconds = 59;
        minutes--;
      } else {
        reset();
        change();
        if (info.textContent == "Working") {
          streak++;
          value3(0, workingV);
        }
      }
    }

    timerdiv.textContent =
      hours > 0
        ? value(hours) + ":" + value(minutes) + ":" + value(seconds)
        : value(minutes) + ":" + value(seconds);
    if (--seconds < 0) {
      timer = minutes;
    }
  }, 1000);
}

function stop() {
  clearInterval(myInterval);
  myInterval = 0;

  stopBtn.style.opacity = "0";
  setTimeout(() => {
    start.hidden = false;
    start.style.display = "flex";
    setTimeout(() => {
      start.style.opacity = "1";
    }, 100);
    stopBtn.hidden = true;
  }, 1000);
}
function reset() {
  var x = stopBtn.hidden;
  stop();
  timerStatus = false;
  timerdiv.textContent = wTime + ":00";
  resetBtn.style.opacity = "0";
  setTimeout(() => {
    start.hidden = false;
    start.style.display = "flex";
    x != true ? resetBtn.hidden = true: {}          // when not stoped timer before reset
    setTimeout(() => {
      start.style.opacity = "1";

      setTimeout(() => {
        document.querySelector("#x").style.animation =
          "stoped-timer 1s forwards";
        if (x == true) {
          // when stoped timer before reset
          start.style.animation = "start-button 1.01s";
          setTimeout(() => {
            resetBtn.hidden = true;
            start.style.animation = "none"
          }, 1000);
        }
      }, 1000);
    }, 1000);
  }, 1000);
}
