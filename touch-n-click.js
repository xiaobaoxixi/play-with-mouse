"use strict";

let mousePositionX;
let mousePositionY;
let mouseStartPositionX;
let mouseStartPositionY;
let mouseStopPositionX;
let mouseStopPositionY;
let currentPositionX;
let currentPositionY;
let dragging = false;

const allDivS = document.querySelectorAll("body>div>div>div[class]");
window.addEventListener("DOMContentLoaded", init);

function init() {
  allDivS.forEach(listen);
  function listen(d) {
    d.addEventListener("mousedown", startDrag);
    d.addEventListener("touchstart", startTouch);
    d.addEventListener("touchmove", whileTouch);
    document.addEventListener("touchend", stopTouch);
    document.addEventListener("touchcancel", stopTouch);
  }
}

function startDrag(m) {
  m.target.addEventListener("mousemove", whileDrag);
  document.addEventListener("mouseup", stopDrag);

  mouseStartPositionX = m.pageX;
  mouseStartPositionY = m.pageY;
  currentPositionX = m.target.offsetLeft;
  currentPositionY = m.target.offsetTop;
}
function whileDrag(m) {
  m.target.style.left = `${currentPositionX + m.pageX - mouseStartPositionX}px`;
  m.target.style.top = `${currentPositionY + m.pageY - mouseStartPositionY}px`;
}
function stopDrag(m) {
  m.target.removeEventListener("mousemove", whileDrag);
}

function startTouch(m) {
  alert("touch start");
}
function startTouch(m) {
  alert("touch start");
}
function whileTouch(m) {
  alert("touching");
}
function stopTouch(m) {
  alert("touch stop");
}
