/*Toggle between showing and hiding the navigation menu links */
function openNav() {
  let navbar = document.getElementById("navbar");
  navbar.style.display = navbar.style.display === "none" ? "block" : "none";
}

function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
