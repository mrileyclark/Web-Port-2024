const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

//show modal

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

//close modal

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//close modal if button clicked
closeModalBtn.addEventListener("click", closeModal);
//close overlay if overlay clicked
overlay.addEventListener("click", closeModal);
