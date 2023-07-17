addBtn.onclick = () => {
  addTodo();
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
        console.log(timerStatus);
        if (timerStatus == "stoped") {
          if (i == 0) {
            console.log(timerType);
            timerType == "working"
              ? (timerdiv.textContent = value2(y + setBtns[index]))
              : {};
          } else if (i == 1) {
            timerType == "break"
              ? (timerdiv.textContent = value2(y + setBtns[index]))
              : {};
          } else if (i == 2) {
            timerType == "long break"
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
startBtn.onclick = start

stopBtn.onclick = stop;

resetBtn.onclick = () => {
  value3(2, workingV);
  reset();
};
// statusBtn.onclick = changeStatus;

searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    search();
  }
});

searchBtn.onclick = search;
