"use strict";

window.addEventListener("DOMContentLoaded", init);
let mousePositionX;
let mousePositionY;
let mouseStartPositionX;
let mouseStartPositionY;
let mouseStopPositionX;
let mouseStopPositionY;
let previousPositionX = 0;
let previousPositionY = 0;
let dragging = false;
const img = document.querySelector(".img");

function init() {
  window.addEventListener("mousedown", startDrag);
  window.addEventListener("mousemove", whileDrag);
  window.addEventListener("mouseup", stopDrag);
}
function startDrag(m) {
  dragging = true;
  mouseStartPositionX = m.pageX;
  mouseStartPositionY = m.pageY;
}
function whileDrag(m) {
  if (dragging === true) {
    mousePositionX = m.pageX;
    mousePositionY = m.pageY;
    if (
      -previousPositionX + mousePositionX - mouseStartPositionX + 4 >=
        window.innerWidth - img.clientWidth &&
      -previousPositionX + mousePositionX - mouseStartPositionX < 4
    )
      // 4px border
      img.style.left = `${-previousPositionX +
        mousePositionX -
        mouseStartPositionX -
        2}px`;
    if (
      -previousPositionY + mousePositionY - mouseStartPositionY + 4 >=
        window.innerHeight - img.clientHeight &&
      -previousPositionY + mousePositionY - mouseStartPositionY < 4
    )
      // 4px border
      img.style.top = `${-previousPositionY +
        mousePositionY -
        mouseStartPositionY -
        2}px`;
  }
}
function stopDrag(m) {
  mouseStopPositionX = m.pageX;
  mouseStopPositionY = m.pageY;
  previousPositionX += mouseStartPositionX - mouseStopPositionX;
  previousPositionY += mouseStartPositionY - mouseStopPositionY;
  dragging = false;
}
