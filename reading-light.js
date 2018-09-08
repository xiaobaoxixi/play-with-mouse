"use strict";
let mousePositionY;
window.addEventListener("DOMContentLoaded", checkMouse);

function checkMouse() {
  window.addEventListener("mousemove", getMousePosition);
}

function getMousePosition(m) {
  mousePositionY = m.pageY;
  moveLighting();
}

function moveLighting() {
  console.log(window.innerHeight / 3);
  if (mousePositionY < window.innerHeight / 3) {
    document.querySelector(".dark1").style.height = "0px";
  }
  document.querySelector(".dark1").style.height = `${mousePositionY -
    window.innerHeight / 6}px`;
}
