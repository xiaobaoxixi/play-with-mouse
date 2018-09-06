"use strict";
const square = document.querySelector(".square");
window.addEventListener("DOMContentLoaded", followMouse);
function followMouse() {
  window.addEventListener("mousemove", showMousePosition);
}
function showMousePosition(m) {
  square.textContent = `X: ${m.pageX} \nY: ${m.pageY}`;
  moveSquare(m.pageX, m.pageY);
}
function moveSquare(x, y) {
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
}
/*window.addEventListener("DOMContentLoaded", checkPlaygroundLocation);

checkPlaygroundLocation();

function init(playGround, leftOffset, topOffset) {
  const redSquare = document.querySelector(".follow-mouse .square");
  document.addEventListener("mousemove", getMouseLocation);
  function getMouseLocation(e) {
    redSquare.style.whiteSpace = "pre";
    redSquare.textContent = `X: ${e.pageX} 
Y: ${e.pageY}`;
    if (
      e.pageX >= leftOffset &&
      e.pageX < playGround.clientWidth + leftOffset
    ) {
      redSquare.style.left = `${e.pageX - 200}px`;
    }
    redSquare.style.top = `${e.pageY}px`;
  }
}
function checkPlaygroundLocation() {
  let playGround = document.querySelector(".follow-mouse");
  let playGroundPosition = playGround.getBoundingClientRect();
  let leftOffset = playGroundPosition.left;
  let topOffset = playGroundPosition.bottom;
  let playGroundWidth = playGround.clientWidth;
  console.log(leftOffset);
  init(playGround, leftOffset, topOffset);
}
*/
