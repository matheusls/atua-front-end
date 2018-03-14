window.onload =  function () {
  let sendMessage = document.querySelector(".send-message");
  let others = document.querySelector("#outros");
  let othersInput = document.querySelector("input[name='outros-input']")

  sendMessage.addEventListener("click", function (event) {
    event.preventDefault();
  });
  sendMessage.addEventListener("mousedown", function () {
    this.classList.add("clicking");
  });
  sendMessage.addEventListener("mouseup", function () {
    this.classList.remove("clicking");
  });
  sendMessage.addEventListener("touchstart", function (event) {
    this.classList.add("clicking");
  });
  sendMessage.addEventListener("touchend", function () {
    this.classList.remove("clicking");
  });

  others.addEventListener("change", function () {
    if (this.checked) {
      othersInput.focus();
    } else {
      othersInput.value = "";
    }
  });
}
