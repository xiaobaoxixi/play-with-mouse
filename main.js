"use strict";
const liS = document.querySelectorAll("li");
const iframeS = document.querySelectorAll("iframe");
let iframe;

window.addEventListener("DOMContentLoaded", init);

function init() {
  liS.forEach((li, index) => checkIfDone(li, index));
  //  liS.forEach((li, index) => li.addEventListener("click", console.log(index)));
}

function checkIfDone(li, index) {
  if (index < iframeS.length) iframe = iframeS[index];

  if (!iframe.getAttribute("src")) {
    liS[index].style.color = "lightgrey";
    liS[index].style.cursor = "none";
    iframe.parentElement.querySelector("h1").style.color = "lightgrey";
    iframe.style.height = "0";
  }
  // instead of using the commented out code to seperate the function (which files without click event), use the code below
  li.addEventListener("click", jumpToSection);
  function jumpToSection() {
    iframeS[index].parentElement.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    });
  }
}
