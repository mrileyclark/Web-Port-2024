//seledts menu bars
const burger = document.querySelector("#burger-menu");
//selects list of nav links
const ul = document.querySelector("nav ul");
//selects nav container
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

//close hamburger when nav link is clicked
//select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  });
});
