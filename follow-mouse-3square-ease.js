"use strict";
const square = document.querySelector(".square");
const square1 = document.querySelector(".square1");
const square2 = document.querySelector(".square2");
const squareHeight = square.clientHeight;
const squareWidth = square.clientWidth;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let mousePositionX;
let mousePositionY;
let targetX;
let targetY;
let squarePositionX;
let squarePositionY;
let squarePositionX1;
let squarePositionY1;
let squarePositionX2;
let squarePositionY2;
const steps = 31;
const steps1 = 23;
const steps2 = 11;
let RAF;
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
  moveSquare();
}
function getMouseMovement(m) {
  mousePositionX = m.pageX;
  mousePositionY = m.pageY;
}
function moveSquare() {
  squarePositionX = square.offsetLeft;
  squarePositionY = square.offsetTop;
  squarePositionX1 = square1.offsetLeft;
  squarePositionY1 = square1.offsetTop;
  squarePositionX2 = square2.offsetLeft;
  squarePositionY2 = square2.offsetTop;

  targetX =
    windowWidth / 2 -
    squareWidth / 2 +
    (windowWidth / 2 - mousePositionX) *
      ((windowWidth - squareWidth) / windowWidth);
  targetY =
    windowHeight / 2 -
    squareHeight / 2 +
    (windowHeight / 2 - mousePositionY) *
      ((windowHeight - squareHeight) / windowHeight);

  squarePositionX += (targetX - squarePositionX) / steps;
  squarePositionY += (targetY - squarePositionY) / steps;
  squarePositionX1 += (targetX - squarePositionX1) / steps1;
  squarePositionY1 += (targetY - squarePositionY1) / steps1;
  squarePositionX2 += (targetX - squarePositionX2) / steps2;
  squarePositionY2 += (targetY - squarePositionY2) / steps2;
  square.style.left = `${squarePositionX}px`;
  square.style.top = `${squarePositionY}px`;
  square1.style.left = `${squarePositionX1}px`;
  square1.style.top = `${squarePositionY1}px`;
  square2.style.left = `${squarePositionX2}px`;
  square2.style.top = `${squarePositionY2}px`;
  RAF = requestAnimationFrame(moveSquare);
}
