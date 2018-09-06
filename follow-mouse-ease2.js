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
const steps = 11;

let newSquare;

window.addEventListener("DOMContentLoaded", followMouse);

function followMouse() {
  window.addEventListener("mousemove", showMousePosition);
}
function showMousePosition(m) {
  moveSquareWithEase(m.pageX, m.pageY);
}
function moveSquareWithEase(x, y) {
  squarePositionX = square.offsetLeft;
  squarePositionY = square.offsetTop;

  newSquare = document.createElement("div");
  newSquare.className = "square new-square";
  document.querySelector(".background").appendChild(newSquare);
  document.querySelector(".square:last-of-type").style.left =
    squarePositionX + "px";
  document.querySelector(".square:last-of-type").style.top =
    squarePositionY + "px";
  if (
    squareWidth / 2 <= x &&
    x <= windowWidth - squareWidth - 12 + squareWidth / 2 // 12px is the total width of the borders
  ) {
    eachStepX = (x - squarePositionX - squareWidth / 2) / steps;
    squarePositionX += eachStepX;
    square.style.left = `${squarePositionX}px`;
  }

  if (
    squareHeight / 2 <= y &&
    y <= windowHeight - squareHeight - 12 + squareHeight / 2
  ) {
    eachStepY = (y - squarePositionY - squareHeight / 2) / steps;
    squarePositionY += eachStepY;
    square.style.top = `${squarePositionY}px`;
  }
  //  requestAnimationFrame(moveSquareWithEase);
}
