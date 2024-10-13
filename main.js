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

fetch("https://api.github.com/users/maglovskiNenad/repos", {
  headers: {
    Authorization: "GITHUB_TOKKEN",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const repoList = document.getElementById("repo--list");

    data.forEach((repo) => {
      const p = document.createElement("p");
      p.className = "repo";
      p.innerHTML = `<a href="${repo.html_url}" target="_blank">${
        repo.description || "No description"
      }</a> `;
      repoList.appendChild(p);
    });
  })
  .catch((error) => console.error("Error:", error));
