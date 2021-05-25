const btn = document.getElementById("modalBtn");

const popShow = document.getElementById("thisModal");

const closePop = document.querySelector(".close");

btn.addEventListener("click", function () {
  popShow.classList.add("active");
});

closePop.addEventListener("click", function () {
  popShow.classList.remove("active");
});
