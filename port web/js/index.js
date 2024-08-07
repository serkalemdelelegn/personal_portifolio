var check = document.getElementById("click");
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var menu = document.getElementById("menu");

check.addEventListener("click", () => {
    if (check.checked) {
        header.style.backgroundColor = "#02153f";
        logo.style.color = "#fff";
        menu.style.color = "#fff";

      } else {
        header.style.backgroundColor = "transparent";
        logo.style.color = "#02153f";
        menu.style.color = "#02153f";

      }
} );
// index.js
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".animated_text .title");
  const titles = ["Software Engineer", "Web Developer", "Tech Enthusiast"];
  let index = 0;

  setInterval(() => {
      title.textContent = titles[index];
      index = (index + 1) % titles.length;
  }, 3000);
});



