let header = document.getElementById("header");
let visibleNavbar = document.getElementById("visible--navbar");
let width = window.innerWidth;
 
if(width < 600){
    visibleNavbar.style.display = "none";
}else{
    visibleNavbar.style.display = "";
    }

header.addEventListener("click", function () {
  visibleNavbar.style.display =
    visibleNavbar.style.display == "none" ? "" : "none";

  document.querySelector(".one").classList.toggle("one--animation");
  document.querySelector(".two").classList.toggle("two--animation");
  document.querySelector(".three").classList.toggle("three--animation");
});
