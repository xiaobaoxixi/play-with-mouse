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
  if (m.touches.length === 1) {
    document.addEventListener("touchmove", whileTouch);
    document.addEventListener("touchend", stopTouch);
    document.addEventListener("touchcancel", stopTouch);
    mouseStartPositionX = m.touches[0].clientX;
    mouseStartPositionY = m.touches[0].clientY;
    currentPositionX = m.target.offsetLeft;
    currentPositionY = m.target.offsetTop;
  }
}
function whileTouch(m) {
  if (m.touches.length === 1) {
    m.target.style.left = `${currentPositionX +
      m.touches[0].clientX -
      mouseStartPositionX}px`;
    m.target.style.top = `${currentPositionY +
      m.touches[0].clientY -
      mouseStartPositionY}px`;
  }
}
function stopTouch(m) {
  document.removeEventListener("touchmove", whileTouch);
  document.removeEventListener("touchend", stopTouch);
  document.removeEventListener("touchcancel", stopTouch);
}
