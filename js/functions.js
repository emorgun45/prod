function value(x) {
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
}

function clock(hours, minutes, seconds) {
  var timer;
  myInterval = setInterval(function () {
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    if (hours > 23) {
      hours = 0;
    }
    clockdiv.textContent = value(hours) + ":" + value(minutes);

    if (++seconds < 0) {
      timer = minutes;
    }
  }, 1000);
}

window.onload = function () {
  var seconds = d.getSeconds();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  clock(hours, minutes, seconds);
};

function addTodo() {
  var x = addInput.value;
  todoList.innerHTML += `<li>
  <div>${x}</div>
  <button class="status-btn">
    <img class="status" src="materials/tick.svg" />
  </button>
</li>`;
  addInput.value = "";
}

function change() {
  if (info.textContent == "Working") {
    if (streak != 3) {
      timerdiv.textContent = "5:00";
      info.textContent = "Break";
    } else {
      info.textContent = "Long Break";
      timerdiv.textContent = lbTime + ":00";
    }
  } else {
    info.textContent = "Working";
    timerdiv.textContent = wTime + ":00";
  }
}

console.log(bTime);

function countDown() {
  var timer;
  var x = timerdiv.textContent.split(":");
  var hours = Number(x[0]) > 60 ? Math.floor(Number(x[0]) / 60) : 0;
  var minutes = Number(x[0]) % 60;
  var seconds = x[1];

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
        clearInterval(myInterval);
        myInterval = 0;
        streak++;
        // change();
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
