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
const img = document.querySelector(".img");
const zoomIn = document.querySelector(".zoom-in");
const zoomOut = document.querySelector(".zoom-out");

function init() {
  window.addEventListener("mousedown", startDrag);
  window.addEventListener("mousemove", whileDrag);
  window.addEventListener("mouseup", stopDrag);
  zoomIn.addEventListener("click", zoomInStep);
  zoomOut.addEventListener("click", zoomOutStep);
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
  img.style.width = `${img.clientWidth * 2}px`;
  img.style.height = `${img.clientHeight * 2}px`;
}
function zoomOutStep() {
  img.style.width = `${img.clientWidth / 2}px`;
  img.style.height = `${img.clientHeight / 2}px`;
}
