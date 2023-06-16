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

function value3(value, x) {
  changeStatus(x);
  setTimeout(() => {
    statusImgs(value, x);
  }, 100);
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
  <button class="status-btn" onclick="statusButton(${count})">
    <div>
    <img class="status" src="materials/x mark.svg" />
    </div>
  </button>
</li>`;
  if (z == true) {
    document.querySelector(
      "select[name='to-dos']"
    ).innerHTML += `<option value="${count}">${addInput.value}</option>`;
    if (count == 0) {
      document.querySelector("option[value='x']").remove();
    }
  }
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

function statusButton(x) {
  if (y == false) {
    changeStatus(x);
  }
  y = true;
  statusAreaImgs.forEach((item, index) => {
    item.onclick = () => {
      if (y == true) {
        statusImgs(index, x);
      }
    };
  });
}

function changeStatus(x) {
  let statusArea = document.querySelectorAll(".status-btn > div");
  area = statusArea[x];
  var z = -1 * (infoSt[x] * 20 - 20);
  area.innerHTML = `
    <img class="status" src="materials/tick.svg" />
    <img class="status" src="materials/in progress.svg" />
    <img class="status" src="materials/x mark.svg" />`;

  area.style.border = "solid 1px rgba(255, 255, 255, 0.2)";
  area.style.backgroundColor = "rgba(40, 40, 40, 0.7)";

  area.style.transform = `translateX(${z}px)`;

  statusBtn = document.querySelectorAll(".status-btn");
  statusAreaImgs = area.querySelectorAll("img");
}

function statusImgs(index, x) {
  let statusArea = document.querySelectorAll(".status-btn > div");
  area = statusArea[x];
  valueT = -1 * (index * 20 - 20);
  infoSt[x] = index;
  area.style.transform = `translateX(${valueT}px)`;
  area.style.transition = "transform 1s";

  setTimeout(() => {
    area.textContent = " ";
    area.appendChild(statusAreaImgs[index]);
    let todo = todoList.querySelectorAll("li");
    if (index == 0) {
      todo[x].querySelector("input").style.textDecoration = "line-through #fff";
      todo[x].querySelector("input").style.color = "grey";
    } else {
      todo[x].querySelector("input").style.textDecoration = "none";
      todo[x].querySelector("input").style.color = "#fff";
    }

    // color: grey;
    // text-decoration: line-through white;
    statusBtn[x].style.justifyContent = "center";
    area.style.transform = `translateX(0px)`;
    area.style.transition = "none";
    y = false;
  }, 1000);
}

function go() {
  start.textContent = "Start";
  document.querySelector("#x").style.animation = "started-timer 1s forwards";
  countDown();
  timerStatus = true;
  start.style.opacity = "0";

  setTimeout(() => {
    start.style.display = "none";
    start.hidden = true;
    stopBtn.hidden = false;
    resetBtn.hidden = false;
    z = false;
    setTimeout(() => {
      stopBtn.style.opacity = "1";
      resetBtn.style.opacity = "1";
    }, 100);
  }, 1000);
}

function search() {
  var x = search.value;
  
  window.open(
    `https://www.google.com/search?q=${encodeURI(x)}`,
    "_blank"
  );
  search.value = "";
}
