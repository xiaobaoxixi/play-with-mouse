"use strict";
const square = document.querySelector(".square");
const squareHeight = square.clientHeight;
const squareWidth = square.clientWidth;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let squarePositionX;
let squarePositionY;
let eachStepX;
let eachStepY;
let mousePositionX;
let mousePositionY;
const steps = 31;

window.addEventListener("DOMContentLoaded", followMouse);

function followMouse() {
  window.addEventListener("mousemove", showMousePosition);
  moveSquareWithEase(); // must call this here, otherwise read error
}
function showMousePosition(m) {
  mousePositionX = m.pageX;
  mousePositionY = m.pageY;
}
function moveSquareWithEase() {
  squarePositionX = square.offsetLeft;
  squarePositionY = square.offsetTop;
  if (
    squareWidth / 2 <= mousePositionX &&
    mousePositionX <= windowWidth - squareWidth - 12 + squareWidth / 2 // 12px is the total width of the borders
  ) {
    eachStepX = (mousePositionX - squarePositionX - squareWidth / 2) / steps;
    squarePositionX += eachStepX;
    square.style.left = `${squarePositionX}px`;
  }

  if (
    squareHeight / 2 <= mousePositionY &&
    mousePositionY <= windowHeight - squareHeight - 12 + squareHeight / 2
  ) {
    eachStepY = (mousePositionY - squarePositionY - squareHeight / 2) / steps;
    squarePositionY += eachStepY;
    square.style.top = `${squarePositionY}px`;
  }
  requestAnimationFrame(moveSquareWithEase);
}
