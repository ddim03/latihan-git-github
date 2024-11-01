const navButton = document.querySelector("#open-menu");
const navList = document.querySelector(".nav-list");

navButton.addEventListener("click", () => {
  navList.classList.toggle("close");
});
