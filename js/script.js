var link = document.querySelector(".choose-hotel-date");
var popup = document.querySelector(".choose-hotel-form");

var form = popup.querySelector("form");
var arrival = document.querySelector("[name=arrival-date]");
var departure = document.querySelector("[name=departure-date]");
var grown = document.querySelector("[name=grown]");
var children = document.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("choose-hotel-form-open");
  arrival.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("choose-hotel-form-open")) {
      popup.classList.remove("choose-hotel-form-open");
    }
  }
});

window.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !grown.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("choose-hotel-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("choose-hotel-form-error");
  }
});
