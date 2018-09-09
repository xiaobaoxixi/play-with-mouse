"use strict";
const big = document.querySelector(".big");
const small = document.querySelector(".small");
const bigRadius = big.clientHeight / 2;
const smallRadius = small.clientHeight / 2;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let bigPositionX;
let bigPositionY;
let smallPositionX;
let smallPositionY;
let mousePositionX;
let mousePositionY;
let eachStepX;
let eachStepY;

let bigPositionXArray = [];
let bigPositionYArray = [];
let previousMovementX, previousMovementY;

const steps = 7;
let rAF;

window.addEventListener("DOMContentLoaded", init);

function init() {
  big.addEventListener("click", followMouse);
}

function followMouse() {
  big.querySelector("p").textContent = "";
  window.addEventListener("mousemove", updateMousePosition);
  requestAnimationFrame(moveSquareWithEase);
  pushPosition();
}
function pushPosition() {
  bigPositionXArray.push(bigPositionX);
  bigPositionYArray.push(bigPositionY);
  setTimeout(pushPosition, 30);
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
}
function updateMousePosition(m) {
  mousePositionX = m.pageX;
  mousePositionY = m.pageY;

  checkMeetEachother();
  //  checkMeetEdge();
}
function moveSquareWithEase() {
  bigPositionX = big.offsetLeft;
  bigPositionY = big.offsetTop;
  if (0 <= mousePositionX && mousePositionX <= windowWidth) {
    eachStepX = (mousePositionX - bigPositionX - bigRadius) / steps;
    bigPositionX += eachStepX;
    big.style.left = `${bigPositionX}px`;
  }

  if (0 <= mousePositionY && mousePositionY <= windowHeight) {
    eachStepY = (mousePositionY - bigPositionY - bigRadius) / steps;
    bigPositionY += eachStepY;
    big.style.top = `${bigPositionY}px`;
  }
  requestAnimationFrame(moveSquareWithEase);
}
function checkMeetEachother() {
  // check distance vs radius1+radius2.
  // NOT sure why need extra px(half or full of the blue balls bounce movement) for calculating distance between the 2 balls in only some cases, maybe because of lag in register position?
  if (
    (big.offsetLeft < small.offsetLeft &&
      big.offsetTop < small.offsetTop &&
      Math.sqrt(
        (Math.abs(big.offsetLeft - small.offsetLeft) - 25) ** 2 +
          (Math.abs(big.offsetTop - small.offsetTop) - 10) ** 2
      ) <=
        bigRadius + smallRadius) ||
    (big.offsetLeft < small.offsetLeft &&
      big.offsetTop > small.offsetTop &&
      Math.sqrt(
        (Math.abs(big.offsetLeft - small.offsetLeft) + 0) ** 2 +
          (Math.abs(big.offsetTop - small.offsetTop) + 0) ** 2
      ) <=
        bigRadius + smallRadius) ||
    (big.offsetLeft > small.offsetLeft &&
      big.offsetTop > small.offsetTop &&
      Math.sqrt(
        (Math.abs(big.offsetLeft - small.offsetLeft) + 50) ** 2 +
          (Math.abs(big.offsetTop - small.offsetTop) + 20) ** 2
      ) <=
        bigRadius + smallRadius) ||
    (big.offsetLeft > small.offsetLeft &&
      big.offsetTop < small.offsetTop &&
      Math.sqrt(
        (Math.abs(big.offsetLeft - small.offsetLeft) + 25) ** 2 +
          (Math.abs(big.offsetTop - small.offsetTop) + 10) ** 2
      ) <=
        bigRadius + smallRadius)
  )
    smallballBounce();
}
function smallballBounce() {
  smallPositionX = small.offsetLeft;
  smallPositionY = small.offsetTop;
  if (previousMovementX === "right")
    small.style.left = `${smallPositionX + 50}px`;
  if (previousMovementX === "left")
    small.style.left = `${smallPositionX - 50}px`;
  if (previousMovementY === "down")
    small.style.top = `${smallPositionY + 20}px`;
  if (previousMovementY === "up") small.style.top = `${smallPositionY - 20}px`;
  if (previousMovementX === "noX") small.style.left = `${smallPositionX}px`;
  if (previousMovementY === "noY") small.style.top = `${smallPositionY}px`;
}
//function checkMeetEdge() {}
