let navbarSectionUl = document.getElementById("ul--section--navbar");
let visibleNavbar = document.getElementById("visible--navbar");
let closeNavbarBtn = document.getElementById("close--navbar--btn");
let navbarMenu = document.getElementsByClassName("navbar--menu");

navbarSectionUl.addEventListener("click", function () {
  visibleNavbar.style.display = "block";
});

closeNavbarBtn.addEventListener("click", function () {
  visibleNavbar.style.display = "none";
});

window.addEventListener("resize", function () {
  if (this.document.documentElement.clientWidth >= 601) {
    visibleNavbar.style.display = "flex";
  } else {
    visibleNavbar.style.display = "none";
  }
});
