addBtn.onclick = () => {
  if (addInput.value.trim().length != 0) {
    addTodo();
    addTodoDiv.style.border = "none";
  } else {
    addTodoDiv.style.border = "solid 1px rgba(255,0,0,0.5)";
  }
};

// onclick event of button in settings
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
          // if you wanna specified function for buttons add here
        }
      }
    };
  });
}
// onclick event of checkbox in settings
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

// onclick event of start button in container (under the timer)
start.onclick = () => {
  if (info.textContent == "Working") {
    if (z == false) {
      start.innerHTML = `
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
        ).innerHTML += `<option value="x">Add new task</option>`;
      }
      start.querySelector("button").onclick = () => {
        workingV = document.querySelector("select[name='to-dos']").value;
        var x = document.querySelector("select[name='to-dos']").value.length;
        if (workingV != "x") {
          start.style.border = "none";
          go();
        } else {
          start.style.border = "solid 1px red";
        }
      };
      z = true;
    }
  } else {
    go();
  }
};

stopBtn.onclick = stop;

resetBtn.onclick = () => {
  value3(2, workingV);
  reset();
};
// statusBtn.onclick = changeStatus;

searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    search()
  }
});

searchBtn.onclick = search;