"use strict";

window.addEventListener("DOMContentLoaded", init);
let mousePositionX;
let mousePositionY;
let mouseStartPositionX;
let mouseStartPositionY;
let imgStartPositionX;
let imgStartPositionY;
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

let currentXAtCenter;
let currentYAtCenter;

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
  imgStartPositionX = img.offsetLeft;
  imgStartPositionY = img.offsetTop;
}
function whileDrag(m) {
  if (dragging === true) {
    mousePositionX = m.pageX;
    mousePositionY = m.pageY;
    img.style.left = `${previousPositionX +
      mousePositionX -
      mouseStartPositionX}px`;
    img.style.top = `${previousPositionY +
      mousePositionY -
      mouseStartPositionY}px`;
  }
}
function stopDrag(m) {
  mouseStopPositionX = m.pageX;
  mouseStopPositionY = m.pageY;

  previousPositionX += mouseStopPositionX - mouseStartPositionX;
  previousPositionY += mouseStopPositionY - mouseStartPositionY;
  dragging = false;
}

function zoomInStep() {
  // check spot to keep at center, currentXAtS and currentYAtS are offset in relation to the top left corner of image
  currentXAtCenter =
    img.clientWidth -
    (img.offsetLeft + img.clientWidth - window.innerWidth / 2);
  currentYAtCenter =
    img.clientHeight -
    (img.offsetTop + img.clientHeight - window.innerHeight / 2);

  img.style.width = `${img.clientWidth * zoomStep}px`;
  img.style.height = `${img.clientHeight * zoomStep}px`;
  img.style.left = `${img.offsetLeft - currentXAtCenter}px`;
  img.style.top = `${img.offsetTop - currentYAtCenter}px`;
  previousPositionX = img.offsetLeft;
  previousPositionY = img.offsetTop;
}
function zoomOutStep() {
  // check spot to keep at center, currentXAtS and currentYAtS are offset in relation to the top left corner of image
  currentXAtCenter =
    img.clientWidth -
    (img.offsetLeft + img.clientWidth - window.innerWidth / 2);
  currentYAtCenter =
    img.clientHeight -
    (img.offsetTop + img.clientHeight - window.innerHeight / 2);

  img.style.width = `${img.clientWidth / zoomStep}px`;
  img.style.height = `${img.clientHeight / zoomStep}px`;
  img.style.left = `${img.offsetLeft + currentXAtCenter / 2}px`;
  img.style.top = `${img.offsetTop + currentYAtCenter / 2}px`;
  previousPositionX = img.offsetLeft;
  previousPositionY = img.offsetTop;
}
function reCenter() {
  img.style.left = `${(window.innerWidth - img.clientWidth) / 2}px`;
  img.style.top = `${(window.innerHeight - img.clientHeight) / 2}px`;
  previousPositionX = img.offsetLeft;
  previousPositionY = img.offsetTop;
}
