const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navbar = document.querySelector("nav");
const body = document.body

openMenu.classList.add("show");

openMenu.addEventListener("click", () => {
  openMenu.classList.remove("show");
  closeMenu.classList.add("show");
  navbar.classList.add("show");
  body.classList.add("no-scroll")
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.remove("show");
  openMenu.classList.add("show");
  navbar.classList.remove("show");
  body.classList.remove("no-scroll")
});

document.querySelectorAll(".navbar__link").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
    closeMenu.classList.remove("show");
    openMenu.classList.add("show");
    body.classList.remove("no-scroll");
  });
});
