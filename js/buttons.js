addBtn.onclick = () => {
  var x = addInput.value;
  console.log(x.length);
  if (x.length != 0) {
    addTodo();
    
  }
};

for (let i = 0; i < setEl.length; i++) {
  const element = setEl[i];
  x = element.querySelectorAll(".setV > button");
  x.forEach(function (item, index) {
    item.onclick = function () {
      // i = li number
      //index = - or +
      y = Number(element.querySelector(".setV > div").textContent);
      if (y > 1) {
        element.querySelector(".setV > div").textContent = y + setBtns[index];
        if (timerStatus == false) {
          if (i == 0) {
            info.textContent == "Working"
              ? (timerdiv.textContent = value2(y + setBtns[index]))
              : {};
          } else if (i == 1) {
            info.textContent == "Break"
              ? (timerdiv.textContent = value2(y + setBtns[index]))
              : {};
          } else if (i == 2) {
            info.textContent == "Long Break"
              ? (timerdiv.textContent = value2(y + setBtns[index]))
              : {};
          }
        }
      }
      // if you wanna specified function for buttons add here
    };
  });
}
setChBtn.onclick = () => {
  if (valueC == "unchecked") {
    setChBtn.style.backgroundColor = "var(--background-click)";
    setChBtn.style.border = "var(--border-click)";
    setChBtn.querySelector("img").style.visibility =
      "var(--visibility-img-click)";

    valueC = "checked";
  } else {
    setChBtn.style.backgroundColor = "var(--background)";
    setChBtn.style.border = "var(--border)";
    setChBtn.querySelector("img").style.visibility = "var(--visibility-img)";
    valueC = "unchecked";
  }
};

start.onclick = () => {
  if (z == false) {
    start.innerHTML = `
      <label for="">I am working </label>
      <select name='to-dos'>
      </select>
      <button><img src="materials/right arrow.svg" alt=""></button>`;
    if (todoList.querySelectorAll("li").length != 0) {
      todoList.querySelectorAll("li").forEach((item, index) => {
        var item = item.querySelector("input");
        document.querySelector(
          "select[name='to-dos']"
        ).innerHTML += `<option value="${index}">${item.value}</option>`;
        console.log(item.value);
      });
    } else {
      document.querySelector(
        "select[name='to-dos']"
      ).innerHTML += `<option value="">Add new task</option>`;
    }
    start.querySelector("button").onclick = () => {
      var x = document.querySelector("select[name='to-dos']").value.length;
      if (x != 0) {
        start.textContent = "Start";
        document.querySelector("#x").style.animation =
          "started-timer 1s forwards";
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
      } else {
        alert("select area shouldn't blank");
      }
    };
    z = true;
  }
};

stopBtn.onclick = stop;
resetBtn.onclick = reset;
// statusBtn.onclick = changeStatus;
