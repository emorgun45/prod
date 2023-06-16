let clockdiv = document.querySelector(".clock");
let timerdiv = document.querySelector(".timer");
let info = document.querySelector(".info");
let start = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let workingV;

let setEl = document.querySelectorAll(".set-general > li");
let setChBtn = document.querySelector(".checkbox > button");
let setBtns = [-1, 1];

let addBtn = document.querySelector(".add-btn");
let addTodoDiv = document.querySelector(".add-todo");
let todoList = document.querySelector(".todo-list");
let addInput = document.querySelector(".add-input");
let statusAreaImgs = document.querySelectorAll(".status-btn > div > img");
let statusBtn = document.querySelector(".status-btn");
let count = 0;
let infoSt = [];

let wTime = document.querySelector("#wTime").textContent;
let bTime = document.querySelector("#bTime").textContent;
let lbTime = document.querySelector("#lbTime").textContent;
let lbInter = document.querySelector("#lbInter").textContent;

let searchInput = document.querySelector("#search");
let searchBtn = document.querySelector(".navcenter > button");

let streak = 0;
let valueC = "unchecked";
let valueT = -20;
let timerStatus = false; // if this true, timer was started
let y = false;
let z = false;

const d = new Date();
