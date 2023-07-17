function countDown() {
  var timer;
  var x = timerdiv.textContent.split(":");
  var hours = Number(x[0]) > 60 ? Math.floor(Number(x[0]) / 60) : 0;
  var minutes = Number(x[0]) % 60;
  var seconds = x[1];
  timerType == "working" ? value3(1, workingV) : {};

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
        if (timerType == "working") {
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

function start() {
  if (timerType == "working" && timerStatus == "stoped") {
    if (z == false) {
      startBtn.innerHTML = `
          <label for="">I am working on</label>
          <select name='to-dos'>
          </select>
          <button><img src="materials/right arrow.svg" alt=""></button>`;
      var x = todoList.querySelectorAll("li");
      if (x.length != 0) {
        x.forEach((item, index) => {
          if (infoSt[index] != 0) {
            var item = item.querySelector("input");
            document.querySelector(
              "select[name='to-dos']"
            ).innerHTML += `<option value="${index}">${item.value}</option>`;
          }
        });
      } else {
        document.querySelector(
          "select[name='to-dos']"
        ).innerHTML += `<option value="x">Add task</option>`;
      }
      startBtn.onclick = () => {};
      startBtn.querySelector("button").onclick = () => {
        workingV = document.querySelector("select[name='to-dos']").value;
        var x = document.querySelector("select[name='to-dos']").value.length;
        if (workingV != "x") {
          startBtn.style.border = "none";
          go();
        } else {
          startBtn.style.border = "solid 1px red";
        }
      };
      z = true;
    }
  } else {
    go();
  }
}

function stop() {
  clearInterval(myInterval);
  myInterval = 0;
  timerStatus = "paused";

  stopBtn.style.opacity = "0";
  setTimeout(() => {
    startBtn.hidden = false;
    startBtn.style.display = "flex";
    setTimeout(() => {
      startBtn.style.opacity = "1";
    }, 100);
    stopBtn.hidden = true;
  }, 1000);
}
function reset() {
  var x = stopBtn.hidden;
  stop();
  timerdiv.textContent = wTime + ":00";
  resetBtn.style.opacity = "0";
  setTimeout(() => {
    startBtn.hidden = false;
    startBtn.style.display = "flex";
    x != true ? (resetBtn.hidden = true) : {}; // when not stoped timer before reset
    setTimeout(() => {
      startBtn.style.opacity = "1";
      timerStatus = "stoped";
      setTimeout(() => {
        document.querySelector("#x").style.animation =
          "stoped-timer 1s forwards";
        if (x == true) {
          // when stoped timer before reset
          startBtn.style.animation = "start-button 1.01s";
          setTimeout(() => {
            resetBtn.hidden = true;
            startBtn.style.animation = "none";
          }, 1000);
        }
      }, 1000);
    }, 1000);
  }, 1000);
}
