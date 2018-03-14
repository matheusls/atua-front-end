"use strict";

window.onload = function () {
  var sendMessage = document.querySelector(".send-message");

  sendMessage.addEventListener("mousedown", function () {
    this.classList.add("clicking");
  });
  sendMessage.addEventListener("mouseup", function () {
    this.classList.remove("clicking");
  });
};