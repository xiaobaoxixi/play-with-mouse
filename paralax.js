"use strict";
const divS = document.querySelectorAll("div");
let div;
let mousePositionX;
let distanceX;
let currentX;
let steps = 31;
let backgroundPosition = 0;
let eachStep = 0;

window.addEventListener("DOMContentLoaded", forEachDiv);

function forEachDiv() {
  divS.forEach(d => checkMouseEnter(d));
}
function checkMouseEnter(d) {
  d.addEventListener("mouseenter", listenToMouseMove);
  d.addEventListener("mouseleave", ignoreMouseMove);
  function listenToMouseMove() {
    div = d;
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
  div.style.backgroundPosition = `${currentX}px`;
}
