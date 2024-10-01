let navbar = document.getElementById("navbar");

header.addEventListener("click", function () {
  navbar.style.display = navbar.style.display === "none" ? "block" : "none";
});

let toggle = document.getElementById("toggleBtn");

toggle.addEventListener("click", function () {
  element.classList.toggle("dark-mode");
});

let header = document.getElementById("header");
var element = document.body;

window.addEventListener("resize", function () {
  let width = this.window.outerWidth;
  if (width > 600) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "block";
  }
});
