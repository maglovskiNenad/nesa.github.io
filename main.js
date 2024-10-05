let header = document.getElementById("header");
let visibleNavbar = document.getElementById("visible--navbar");

visibleNavbar.style.display = "none";

header.addEventListener("click", function () {
  visibleNavbar.style.display =
    visibleNavbar.style.display == "none" ? "" : "none";

  document.querySelector(".one").classList.toggle("one--animation");
  document.querySelector(".two").classList.toggle("two--animation");
  document.querySelector(".three").classList.toggle("three--animation");
});
