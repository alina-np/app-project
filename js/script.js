// Бургерное меню
const burger = document.querySelector(".mobileMenu"),
  header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  window.addEventListener("click", function (e) {
    if (!header.contains(e.target)) header.classList.remove("active");
  });
});
