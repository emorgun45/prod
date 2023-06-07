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
  alert("naber")
  var x = addInput.value;
  todoList.innerHTML +=`<li>
  <div>${x}</div>
  <button class="status-btn">
    <img class="status" src="materials/tick.svg" />
  </button>
</li>`
}

// hidden button

// function change(x){
//   var hour = Math.floor(x / 60)
//   var minutes = x % 60
//   if(hour != 0){sec.textContent = value(hour) + ":" + value(minutes) + ":" + value(0);}
//   else{sec.textContent = value(minutes) + ":" + value(0);}
//   rangeValue = x
//   console.log(rangeValue)
// }

// function countDown() {
//   var timer;
//   var hours = Math.floor(rangeValue / 60)
//   var minutes = rangeValue % 60
//   var seconds = 0

//   myInterval = setInterval(function () {
//     if (minutes == 0) {
//       if ((hours != 0)) {
//         minutes = 59;
//         hours--;
//       } else {
//         console.log("hours = 0")
//       }
//     }
//     if (seconds == 0) {
//       if ((minutes != 0)) {
//         seconds = 59;
//         minutes--;
//       }
//     }

//     sec.textContent =
//       value(hours) + ":" + value(minutes) + ":" + value(seconds);

//     if (--seconds < 0) {
//       timer = minutes;
//     }
//   }, 1000);
// }

// start.onclick = countDown;

// reset.onclick = () => {
//   clearInterval(myInterval)
//   myInterval = 0
// };
