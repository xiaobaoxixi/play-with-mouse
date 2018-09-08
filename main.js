"use strict";
const liS = document.querySelectorAll("li");
const iframeS = document.querySelectorAll("iframe");
let iframe;
liS.forEach((li, index) => checkIfDone(li, index));
function checkIfDone(li, index) {
  if (index < iframeS.length) iframe = iframeS[index];

  if (!iframe.getAttribute("src")) liS[index].style.color = "lightgrey";
}
