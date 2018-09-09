"use strict";

let mousePositionX;
let mousePositionY;
let mouseStartPositionX;
let mouseStartPositionY;
let mouseStopPositionX;
let mouseStopPositionY;
let previousPositionX = 0;
let previousPositionY = 0;
let dragging = false;

const allDivS = document.querySelectorAll("body>div>div>div[class]");
window.addEventListener("DOMContentLoaded", init);

function init() {
  allDivS.forEach(listen);
  function listen(d) {
    d.addEventListener("mousedown", startDrag);
  }
}

function startDrag(m) {
  console.log(m.target);
}
// function init() {
//   big.addEventListener("mousedown", startDrag);
//   big.addEventListener("mousemove", whileDrag);
//   big.addEventListener("mouseup", stopDrag);
// }
// function startDrag(m) {
//   dragging = true;
//   mouseStartPositionX = m.pageX;
//   mouseStartPositionY = m.pageY;
// }
// function whileDrag(m) {
//   if (dragging === true) {
//     mousePositionX = m.pageX;
//     mousePositionY = m.pageY;
//     big.style.left = `${-previousPositionX +
//       mousePositionX -
//       mouseStartPositionX}px`;
//     big.style.top = `${-previousPositionY +
//       mousePositionY -
//       mouseStartPositionY}px`;
//   }
// }
// function stopDrag(m) {
//   mouseStopPositionX = m.pageX;
//   mouseStopPositionY = m.pageY;
//   previousPositionX += mouseStartPositionX - mouseStopPositionX;
//   previousPositionY += mouseStartPositionY - mouseStopPositionY;
//   dragging = false;
// }
