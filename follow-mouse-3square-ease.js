"use strict";
const square = document.querySelector(".square");
const square1 = document.querySelector(".square1");
const square2 = document.querySelector(".square2");
const squareHeight = square.clientHeight;
const squareWidth = square.clientWidth;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let targetX;
let targetY;
let squarePositionX;
let squarePositionY;
const steps1 = 31;
const steps2 = 23;
const steps3 = 11;

window.addEventListener("DOMContentLoaded", centerSquare);

function centerSquare() {
  square.style.left = (windowWidth - squareWidth) / 2 + "px";
  square.style.top = (windowHeight - squareHeight) / 2 + "px";
  square1.style.left = (windowWidth - squareWidth) / 2 + "px";
  square1.style.top = (windowHeight - squareHeight) / 2 + "px";
  square2.style.left = (windowWidth - squareWidth) / 2 + "px";
  square2.style.top = (windowHeight - squareHeight) / 2 + "px";
  checkMouse();
}
function checkMouse() {
  window.addEventListener("mousemove", getMouseMovement);
}
function getMouseMovement(m) {
  moveSquare(m.pageX, m.pageY);
}
function moveSquare(x, y) {
  squarePositionX = square.offsetLeft;
  squarePositionY = square.offsetTop;

  targetX =
    windowWidth / 2 -
    squareWidth / 2 +
    (windowWidth / 2 - x) * ((windowWidth - squareWidth) / windowWidth);
  targetY =
    windowHeight / 2 -
    squareHeight / 2 +
    (windowHeight / 2 - y) * ((windowHeight - squareHeight) / windowHeight);

  squarePositionX += (targetX - squarePositionX) / steps;
  squarePositionY += (targetY - squarePositionY) / steps;
  square.style.left = `${squarePositionX}px`;
  square.style.top = `${squarePositionY}px`;
}
