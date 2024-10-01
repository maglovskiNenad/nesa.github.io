let navbar = document.getElementById("navbar");
let toggle = document.getElementById("toggleBtn");
let header = document.getElementById("header");
var element = document.body;

header.addEventListener("click", function () {
  navbar.style.display = navbar.style.display === "none" ? "block" : "none";
});

toggle.addEventListener("click", function () {
  element.classList.toggle("dark-mode");
});

window.addEventListener("resize", function () {
  let width = this.window.outerWidth;
  if (width > 600) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "block";
  }
});
