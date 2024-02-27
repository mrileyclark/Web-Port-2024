const form = document.querySelector("form");
const container_1 = document.querySelector(".container_1");
const container_2 = document.querySelector(".container_2");
const dismissBtn = document.querySelector(".dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container_1.classList.add("toggle");
  container_2.classList.remove("toggle");
});

//dismises the message goes back to main page
dismissBtn.addEventListener("click", () => {
  // e.preventDefault();
  container_1.classList.remove("toggle");
  container_2.classList.add("toggle");
});
