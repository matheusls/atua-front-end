"use strict";

window.onload = function () {
  var sendMessage = document.querySelector(".send-message");
  var otherCheckbox = document.querySelector("#outros");
  var othersInput = document.querySelector("input[name='outros-input']");

  sendMessage.addEventListener("click", function (event) {
    event.preventDefault();
  });
  sendMessage.addEventListener("mousedown", function (event) {
    event.target.classList.add("clicking");
  });
  sendMessage.addEventListener("mouseup", function (event) {
    event.target.classList.remove("clicking");
  });
  sendMessage.addEventListener("touchstart", function (event) {
    event.target.classList.add("clicking");
  });
  sendMessage.addEventListener("touchend", function (event) {
    event.target.classList.remove("clicking");
  });

  otherCheckbox.addEventListener("change", function (event) {
    if (event.target.checked) {
      othersInput.focus();
    } else {
      othersInput.value = "";
    }
  });
};