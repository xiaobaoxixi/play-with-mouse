"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  // let bg = document.querySelector(".bg");
  // //   let borderRight = bg.getBoundingClientRect().left + bg.clientWidth;
  // //   let borderTop = bg.getBoundingClientRect().top;
  // let p = document.querySelector(".text p").textContent.split("");
  // let text = document.querySelector(".text");
  // text.querySelector("p").innerHTML = "";
  // p.forEach(letter => {
  //   text.querySelector("p").innerHTML += `<span>${letter}</span>`;
  // });
  let spanS = document.querySelectorAll("span");
  let radius = window.innerWidth * 0.5;
  spanS.forEach(checkIfOverlap);

  window.addEventListener("scroll", function() {
    spanS.forEach(checkIfOverlap);
  }); // if body has fixed height to 100vh, window event "scroll" won't be triggered
  function checkIfOverlap(s) {
    let x = s.getBoundingClientRect().left; // offsetLeft is offset to the parent element, getBCR is to window
    let y = s.getBoundingClientRect().top;
    let borderY =
      window.innerHeight - Math.sqrt(Math.pow(radius, 2) - Math.pow(x, 2));
    if (x < radius - 48 && y > borderY + 16) {
      // =/+ based on current font size, not accurate
      s.style.color = "white";
    } else {
      s.style.color = "orange";
    }
  }
}
