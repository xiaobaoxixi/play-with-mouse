"use strict";
const div = document.querySelector("div");
let mousePositionX;
let distanceX;
let currentX;
let steps = 31;
let backgroundPosition = 0;
let eachStep = 0;

window.addEventListener("DOMContentLoaded", checkMouseEnter);

function checkMouseEnter() {
  div.addEventListener("mouseenter", listenToMouseMove);
  div.addEventListener("mouseleave", ignoreMouseMove);
  function listenToMouseMove() {
    window.addEventListener("mousemove", getMousePosition);
  }
  function ignoreMouseMove() {
    window.removeEventListener("mousemove", getMousePosition);
  }
}
function getMousePosition(m) {
  mousePositionX = m.pageX;
  moveFollowMouse();
  if (mousePositionX > window.innerWidth / 2) div.style.cursor = "e-resize";
  if (mousePositionX <= window.innerWidth / 2) div.style.cursor = "w-resize";
}
function moveFollowMouse() {
  distanceX = mousePositionX - window.innerWidth / 2;

  currentX = window
    .getComputedStyle(div)
    .getPropertyValue("background-position");
  currentX = currentX.substring(0, currentX.indexOf("px"));
  currentX = Number(currentX);
  eachStep = (distanceX / steps) * 5;
  currentX += eachStep;
  console.log(eachStep);
  div.style.backgroundPosition = `${currentX}px`;
}
