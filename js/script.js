window.onload =  () => {
  let sendMessage = document.querySelector(".send-message");
  let otherCheckbox = document.querySelector("#outros");
  let othersInput = document.querySelector("input[name='outros-input']")

  sendMessage.addEventListener("click", (event) => {
    event.preventDefault();
  });
  sendMessage.addEventListener("mousedown", (event) => {
    event.target.classList.add("clicking");
  });
  sendMessage.addEventListener("mouseup", (event) => {
    event.target.classList.remove("clicking");
  });
  sendMessage.addEventListener("touchstart", (event) => {
    event.target.classList.add("clicking");
  });
  sendMessage.addEventListener("touchend", (event) => {
    event.target.classList.remove("clicking");
  });

  otherCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      othersInput.focus();
    } else {
      othersInput.value = "";
    }
  });
}
