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
}

function startDrag(m) {
  dragging = true;
  cancelAnimationFrame(rAF);
  yellow.addEventListener("mousemove", whileDrag);
  yellow.addEventListener("mouseup", stopDrag);
  yellow.addEventListener("mouseleave", stopDrag);
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
  yellow.style.pointerEvent = "none";
  yellow.removeEventListener("mousemove", whileDrag);
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
  // taint = filter blur + gradient
  yellow.style.filter = "blur(2px)";
  orange.style.filter = "blur(2px)";
  document.querySelector(
    "h1"
  ).style.textShadow = `0 -1px 7px rgba(255, 98, 73, 0.9)`;
  //  document.querySelector(".yellow p").style.display = "none";
  yellow.style.backgroundImage = `radial-gradient(ellipse at top left, transparent ${100 -
    5 * meetCount}%, rgba(114,125,100,.9))`; //rgba(27, 58, 99, .85),
  orange.style.backgroundImage = `radial-gradient(ellipse at bottom right, transparent ${90 -
    1.3 * meetCount}%, rgba(114,125,100,.9))`; //rgba(232, 222, 108, .5)
}
