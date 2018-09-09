"use strict";
const drop = document.querySelector(".drop");
let dropping = true;
let height;
let dropTimeout;
window.addEventListener("DOMContentLoaded", newDrop);

function newDrop() {
  randomColor();
  drop.style.top = `${window.innerHeight * 0.12}px`;
  console.log(drop.offsetTop);
  dropByStep();
}

function randomColor() {
  if (Math.random() > 0.5) {
    drop.style.backgroundColor = "rgb(232, 222, 108)";
  } else {
    drop.style.backgroundColor = "rgb(255, 98, 73)";
  }
}

function dropByStep() {
  height = drop.offsetTop;
  console.log(height, window.innerHeight);
  if (height >= window.innerHeight * 0.11 && height < window.innerHeight) {
    drop.style.top = `${height + drop.clientHeight}px`;
    dropTimeout = setTimeout(dropByStep, 500);
  } else {
    console.log("bottom");
    clearTimeout(dropTimeout);
    console.log(height);
    newDrop();
  }
}
