"use strict";

const yellow = document.querySelector(".yellow");
const orange = document.querySelector(".orange");
let mouseStartPositionX,
  mouseStartPositionY,
  squareStartWidth,
  widthStep,
  width;
let dragging = false;
let rAF;
let meetCount = 0;

window.addEventListener("DOMContentLoaded", init);

function init() {
  yellow.addEventListener("mousedown", startDrag);
  yellow.addEventListener("mousemove", whileDrag);
  yellow.addEventListener("mouseup", stopDrag);
}

function startDrag(m) {
  dragging = true;
  cancelAnimationFrame(rAF);
  mouseStartPositionX = m.pageX;
  mouseStartPositionY = m.pageY;
  squareStartWidth = m.target.clientWidth;
}
function whileDrag(m) {
  if (dragging === true) {
    m.target.style.width = `${squareStartWidth +
      m.pageX -
      mouseStartPositionX}px`;
  }
  if (yellow.clientWidth > window.innerWidth - orange.clientWidth) {
    meetCount++;
    rAF = requestAnimationFrame(drawbackAndTaint);
  }
}
function stopDrag(m) {
  console.log("up");
  dragging = false;
}
function drawbackAndTaint() {
  widthStep = (yellow.style.width.slice(0, -2) - 300) / 7;
  width = yellow.style.width.slice(0, -2);
  if (width > 301) {
    width -= widthStep;
    yellow.style.width = `${width}px`;
    requestAnimationFrame(drawbackAndTaint);
  } else {
    cancelAnimationFrame(rAF);
  }
  document.querySelector(".yellow p").style.display = "none";
  yellow.style.backgroundImage = `linear-gradient(to bottom right, #E8DE6C ${100 -
    5 * meetCount}%,  rgba(27, 58, 99,.7) 5%,  rgb(27, 58, 99, ${1 -
    0.01 * meetCount}))`;
  orange.style.opacity = `${1 - 0.01 * meetCount}`;
}
