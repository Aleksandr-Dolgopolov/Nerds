"use strict";

const contactsButton = document.querySelector(".contacts__button"),
  formButtonExit = document.querySelector(".form__button-exit"),
  feedback = document.querySelector(".feedback");

contactsButton.addEventListener("click", function (event) {

  event.preventDefault();

  if (feedback.classList.contains("modal-close")) {
    feedback.classList.remove("modal-close");
    feedback.classList.add("modal-show");
  }
});

formButtonExit.addEventListener("click", function () {
  feedback.classList.add("modal-close");
  feedback.classList.remove("modal-show");
});