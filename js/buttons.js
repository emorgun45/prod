addBtn.onclick = addTodo;
for (let i = 0; i < setEl.length; i++) {
  const element = setEl[i];
  x = element.querySelectorAll(".setV > button");
  x.forEach(function (item, index) {
    item.onclick = function () {
      // i = li number
      //index = - or +
      y = Number(element.querySelector(".setV > div").textContent);
      if(y > 1 ){element.querySelector(".setV > div").textContent = y + setBtns[index];
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
      }}
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
  countDown();
  timerStatus = true;
  start.hidden = true;
  stopBtn.hidden = false;
  resetBtn.hidden = false;
};

stopBtn.onclick = stop;
resetBtn.onclick = reset;
