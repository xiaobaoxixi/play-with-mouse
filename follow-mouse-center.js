"use strict";
const square = document.querySelector(".square");
const squareHeight = square.clientHeight;
const squareWidth = square.clientWidth;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

window.addEventListener("DOMContentLoaded", followMouse);

function followMouse() {
  window.addEventListener("mousemove", showMousePosition);
}
function showMousePosition(m) {
  moveSquare(m.pageX, m.pageY);
}
function moveSquare(x, y) {
  if (
    squareWidth / 2 <= x &&
    x <= windowWidth - squareWidth - 6 + squareWidth / 2
  )
    square.style.left = `${x - squareWidth / 2}px`; // 6px is the total width of the borders

  if (
    squareHeight / 2 <= y &&
    y <= windowHeight - squareHeight - 6 + squareHeight / 2
  )
    square.style.top = `${y - squareHeight / 2}px`;
}
