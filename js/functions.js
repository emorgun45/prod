function value(x) {
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
}

function value2(x) {
  return value(Number(x)) + ":00";
}

function clock(hours, minutes, seconds) {
  var timer;
  var myInterval = setInterval(function () {
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
  <input value='${x}'>
  <button class="status-btn" onclick="changeStatus(${count})">
    <div>
    <img class="status" src="materials/x mark.svg" />
    </div>
  </button>
</li>`;
  document.querySelector("select[name='to-dos']").innerHTML +=
  `<option value="${count}">${addInput.value}</option>`
    infoSt.push(2);
  addInput.value = "";
  count++;
}

function change() {
  setTimeout(() => {
    if (info.textContent == "Working") {
      if (streak != Number(lbInter)) {
        timerdiv.textContent = value2(bTime);
        info.textContent = "Break";
      } else {
        info.textContent = "Long Break";
        timerdiv.textContent = value2(lbTime);
      }
    } else {
      info.textContent = "Working";
      timerdiv.textContent = value2(wTime);
    }
  }, 1000);
}

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
        reset();
        change();
        info.textContent == "Working" ? streak++ : {};
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
  start.hidden = false;
  stopBtn.hidden = true;
}
function reset() {
  stop();
  timerStatus = false;
  timerdiv.textContent = wTime + ":00";
  resetBtn.hidden = true;
  start.hidden = false;
  start.style.display = "flex";
  setTimeout(() => {
    start.style.opacity = "1";
    setTimeout(() => {
      document.querySelector("#x").style.animation = "stoped-timer 1s forwards";
    }, 1000);
  }, 100);
}

function changeStatus(x) {
  if (y == false) {
    let statusArea = document.querySelectorAll(".status-btn > div");
    area = statusArea[x];
    var z = -1 * (infoSt[x] * 20 - 20);
    area.innerHTML = `
    <img class="status" src="materials/tick.svg" />
    <img class="status" src="materials/in progress.svg" />
    <img class="status" src="materials/x mark.svg" />
  `;

    area.style.border = "solid 1px rgba(255, 0, 0, 0.35)";

    area.style.transform = `translateX(${z}px)`;
    // area.style.transform = `translateX(${valueT}px)`;
  }
  y = true;
  /*
for (let i = 0; i < statusAreaImgs.length; i++) {
  const element = statusAreaImgs[i];
  element.onclick = () => {
    area.style.transform = `translateX(${i * 20 - 20}px)`;
    console.log(index);
  };*/
  let statusBtn = document.querySelectorAll(".status-btn");
  let statusAreaImgs = area.querySelectorAll("img");

  statusAreaImgs.forEach((item, index) => {
    item.onclick = () => {
      if (y == true) {
        valueT = -1 * (index * 20 - 20);
        infoSt[x] = index;
        area.style.transform = `translateX(${valueT}px)`;
        area.style.transition = "transform 1s";

        setTimeout(() => {
          area.textContent = " ";
          area.appendChild(statusAreaImgs[index]);
          console.log(z);
          console.log(index);
          if (index == 0) {
            let todo = todoList.querySelectorAll("li");
            z = todo[x].querySelector("input");
            todo[x].querySelector("input").style.textDecoration =
              "line-through #fff";
            todo[x].querySelector("input").style.color = "grey";
          }

          // color: grey;
          // text-decoration: line-through white;
          statusBtn[x].style.justifyContent = "center";
          area.style.transform = `translateX(0px)`;
          area.style.transition = "none";
          y = false;
        }, 1000);
      }
    };
  });
}
