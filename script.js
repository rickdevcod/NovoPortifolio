document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    icon.addEventListener("click", () => {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  }
});
