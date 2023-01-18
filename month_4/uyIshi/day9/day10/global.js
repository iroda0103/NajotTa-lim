const imageDarkMode = document.querySelector(".imageDarkMode");
imageDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  document.querySelector(".table").classList.toggle("table-dark");
});
