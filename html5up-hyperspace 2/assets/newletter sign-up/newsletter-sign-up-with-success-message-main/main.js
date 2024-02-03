const form = document.querySelector("form");
const container_1 = document.querySelector(".container_1");
const container_2 = document.querySelector(".container_2");
// const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container_1.classList.add("hidden");
  container_2.classList.remove("hidden");
});
