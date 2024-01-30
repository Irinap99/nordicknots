"use strict";

// Log in popup

const loginBtn = document.querySelector(".login-btn");
const popup = document.querySelector(".popup");
const popupIcon = document.querySelector(".popup__header-icon");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.toggle("hidden");
});

popupIcon.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.toggle("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
  }
});
