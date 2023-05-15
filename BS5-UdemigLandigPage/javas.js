var dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("show.bs.dropdown", function () {
  this.querySelector(".dropdown-menu").classList.add("fade-in");
});

dropdown.addEventListener("hide.bs.dropdown", function () {
  this.querySelector(".dropdown-menu").classList.remove("fade-in");
});
