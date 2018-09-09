"use strict";
const big = document.querySelector(".big");
const small = document.querySelector(".small");
const squareHeight = big.clientHeight;
const squareWidth = big.clientWidth;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let bigPositionX;
let bigPositionY;
let mousePositionX;
let mousePositionY;
let eachStepX;
let eachStepY;

let bigPositionXArray = [];
let bigPositionYArray = [];
let pushPositionLoop;
let previousMovementX, previousMovementY;

const steps = 7;
const rAF = requestAnimationFrame(moveSquareWithEase);

window.addEventListener("DOMContentLoaded", followMouse);

function followMouse() {
  window.addEventListener("mousemove", updateMousePosition);
  requestAnimationFrame(moveSquareWithEase);
  pushPositionLoop = setTimeout(function pushPosition() {
    bigPositionXArray.push(bigPositionX);
    bigPositionYArray.push(bigPositionY);
    setTimeout(pushPosition, 300);
    if (
      bigPositionXArray[bigPositionXArray.length - 2] <
      bigPositionXArray[bigPositionXArray.length - 1]
    ) {
      previousMovementX = "right";
    } else if (
      bigPositionXArray[bigPositionXArray.length - 2] >
      bigPositionXArray[bigPositionXArray.length - 1]
    ) {
      previousMovementX = "left";
    } else {
      previousMovementX = "noX";
    }
    if (
      bigPositionYArray[bigPositionYArray.length - 2] <
      bigPositionYArray[bigPositionYArray.length - 1]
    ) {
      previousMovementY = "down";
    } else if (
      bigPositionYArray[bigPositionYArray.length - 2] >
      bigPositionYArray[bigPositionYArray.length - 1]
    ) {
      previousMovementY = "up";
    } else {
      previousMovementY = "noY";
    }
    console.log(previousMovementX, previousMovementY);
  }, 300);
}
function updateMousePosition(m) {
  mousePositionX = m.pageX;
  mousePositionY = m.pageY;
  moveSquareWithEase();

  checkMeetEachother();
  checkMeetEdge();
}
function moveSquareWithEase() {
  bigPositionX = big.offsetLeft;
  bigPositionY = big.offsetTop;
  if (0 <= mousePositionX && mousePositionX <= windowWidth) {
    eachStepX = (mousePositionX - bigPositionX - squareWidth / 2) / steps;
    bigPositionX += eachStepX;
    big.style.left = `${bigPositionX}px`;
  }

  if (0 <= mousePositionY && mousePositionY <= windowHeight) {
    eachStepY = (mousePositionY - bigPositionY - squareHeight / 2) / steps;
    bigPositionY += eachStepY;
    big.style.top = `${bigPositionY}px`;
  }
  requestAnimationFrame(moveSquareWithEase);
}
function checkMeetEachother() {}
function checkMeetEdge() {}
