"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  let bg = document.querySelector(".bg");
  let borderRight = bg.getBoundingClientRect().left + bg.clientWidth;
  let borderTop = bg.getBoundingClientRect().top;
  console.log(borderTop);
  let spanS = document.querySelectorAll("span");
  spanS.forEach(checkIfOverlap);

  function checkIfOverlap(s) {
    let x = s.getBoundingClientRect().left; // offsetLeft is offset to the parent element, getBCR is to window
    let y = s.getBoundingClientRect().top;
    console.log(y);
    if (x < borderRight && y > borderTop) {
      s.style.color = "white";
    } else {
      s.style.color = "orange";
    }
  }
}
