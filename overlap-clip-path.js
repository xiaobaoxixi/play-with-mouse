"use strict";

const fullText = document.querySelector("#svg2 foreignObject");
const circleText = document.querySelector("#svg1 foreignObject");
fullText.addEventListener("scroll", function() {
  circleText.scrollTop = fullText.scrollTop;
});
