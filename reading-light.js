"use strict";
let mousePositionY;
window.addEventListener("DOMContentLoaded", checkMouse);

function checkMouse() {
  window.addEventListener("mousemove", getMousePosition, moveLighting);
}

function getMousePosition(m) {
  mousePositionY = m.pageY;
  document.querySelector(".dark1 h1").textContent = "";
  moveLighting();
}

function moveLighting() {
  console.log(window.innerHeight / 3);
  if (mousePositionY < window.innerHeight / 3) {
    document.querySelector(".dark1").style.height = "0px";
  }
  document.querySelector(".dark1").style.height = `${mousePositionY -
    window.innerHeight / 6}px`;
  if (mousePositionY > window.innerHeight / 2) {
    document.querySelector(".dark1 h1").textContent = "reading light";
  }
}
