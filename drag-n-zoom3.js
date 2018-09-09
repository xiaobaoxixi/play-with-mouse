"use strict";

window.addEventListener("DOMContentLoaded", init);
let mousePositionX;
let mousePositionY;
let mouseStartPositionX;
let mouseStartPositionY;
let mouseStopPositionX;
let mouseStopPositionY;
let previousPositionX = 0;
let previousPositionY = 0;
let dragging = false;

let zoomStep = 2;
const img = document.querySelector(".img");
const zoomIn = document.querySelector(".zoom-in");
const zoomOut = document.querySelector(".zoom-out");
const centerButton = document.querySelector(".center");
const centerPositionX = window.innerWidth / 2;
const centerPositionY = window.innerHeight / 2;
const x = document.querySelector("aside h1");

function init() {
  centerX();
  window.addEventListener("mousedown", startDrag);
  window.addEventListener("mousemove", whileDrag);
  window.addEventListener("mouseup", stopDrag);
  zoomIn.addEventListener("click", zoomInStep);
  zoomOut.addEventListener("click", zoomOutStep);
  centerButton.addEventListener("click", reCenter);
}
function centerX() {
  x.style.left = `${(window.innerWidth - x.clientWidth) / zoomStep}px`;
  x.style.top = `${(window.innerHeight - x.clientHeight) / zoomStep - 15}px`; // -15 is not precise, just eyeballed. font size setting influence element height,
}
function startDrag(m) {
  dragging = true;
  mouseStartPositionX = m.pageX;
  mouseStartPositionY = m.pageY;
}
function whileDrag(m) {
  if (dragging === true) {
    mousePositionX = m.pageX;
    mousePositionY = m.pageY;
    img.style.left = `${-previousPositionX +
      mousePositionX -
      mouseStartPositionX}px`;
    img.style.top = `${-previousPositionY +
      mousePositionY -
      mouseStartPositionY}px`;
  }
}
function stopDrag(m) {
  mouseStopPositionX = m.pageX;
  mouseStopPositionY = m.pageY;
  previousPositionX += mouseStartPositionX - mouseStopPositionX;
  previousPositionY += mouseStartPositionY - mouseStopPositionY;
  dragging = false;
}

function zoomInStep() {
  img.style.width = `${img.clientWidth * zoomStep}px`;
  img.style.height = `${img.clientHeight * zoomStep}px`;
  reCenter();
  previousPositionX = (-window.innerWidth + img.clientWidth) / zoomStep;
  previousPositionY = (-window.innerHeight + img.clientHeight) / zoomStep;
}
function zoomOutStep() {
  img.style.width = `${img.clientWidth / zoomStep}px`;
  img.style.height = `${img.clientHeight / zoomStep}px`;
  reCenter();
  previousPositionX = (-window.innerWidth + img.clientWidth) / zoomStep;
  previousPositionY = (-window.innerHeight + img.clientHeight) / zoomStep;
}
function reCenter() {
  img.style.left = `${(window.innerWidth - img.clientWidth) / 2}px`;
  img.style.top = `${(window.innerHeight - img.clientHeight) / 2}px`;
}
