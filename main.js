let header = document.getElementById("header");
let visibleNavbar = document.getElementById("visible--navbar");

//On resize acting on navbar to change from dropdown menu to navbar menu
window.addEventListener("resize", function () {
  //Checkinh number of pixels
  if (this.document.documentElement.clientWidth < 600) {
    visibleNavbar.style.display = "none";
  } else {
    visibleNavbar.style.display = "flex";
  }
});

//Animation on burger menu
header.addEventListener("click", function () {
  //Changing the visabiliti for dropdown menu
  visibleNavbar.classList.toggle("navbar--menu");
  //Adding or removing special aniamtion class list for burger menu
  document.querySelector(".one").classList.toggle("one--animation");
  document.querySelector(".two").classList.toggle("two--animation");
  document.querySelector(".three").classList.toggle("three--animation");
});
