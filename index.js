const menu = document.getElementById("toggle");
const nav = document.getElementById("ul");

menu.addEventListener("click", () => {
  if (!nav.classList.contains("open")) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
});
