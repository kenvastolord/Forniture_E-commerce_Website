const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navbar = document.querySelector("nav");

openMenu.classList.add("show");

openMenu.addEventListener("click", () => {
  openMenu.classList.remove("show");
  closeMenu.classList.add("show");
  navbar.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.remove("show");
  openMenu.classList.add("show");
  navbar.classList.remove("show");
});
