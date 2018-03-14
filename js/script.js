window.onload = () => {
  let sendMessage = document.querySelector(".send-message");

  sendMessage.addEventListener("mousedown", function () {
    this.classList.add("clicking");
  });
  sendMessage.addEventListener("mouseup", function () {
    this.classList.remove("clicking");
  });
}
