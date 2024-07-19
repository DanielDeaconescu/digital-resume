"use strict";

const downloadIcon = document.querySelector(".download-icon");
const downloadText = document.querySelector(".download-text");
const downloadLink = document.querySelector(".resume-download-link");
const allAdjustment = document.querySelectorAll(".adjustment");
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
const htmlEl = document.querySelector("html");

const addColor = function (event) {
  const link = event.target.closest(".resume-download-link");
  if (link) {
    downloadIcon.classList.add("hover-color");
    downloadText.classList.add("hover-color");
  }
};

const removeColor = function (event) {
  const link = event.target.closest(".resume-download-link");
  if (link) {
    downloadIcon.classList.remove("hover-color");
    downloadText.classList.remove("hover-color");
  }
};

downloadLink.addEventListener("mouseover", function (e) {
  addColor(e);
});

downloadLink.addEventListener("mouseout", function (e) {
  removeColor(e);
});

btnDark.addEventListener("click", function () {
  allAdjustment.forEach((adjustment) => adjustment.classList.add("light"));
});

btnLight.addEventListener("click", function () {
  allAdjustment.forEach((adjustment) => adjustment.classList.remove("light"));
});

document.addEventListener("DOMContentLoaded", function () {
  const theTheme = htmlEl.getAttribute("data-bs-theme");
  if (theTheme === "dark") {
    allAdjustment.forEach((adjustment) => adjustment.classList.add("light"));
  }
});
