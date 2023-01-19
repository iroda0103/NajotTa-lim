let register = document.querySelector(".register");
let login = document.querySelector(".login");
register.addEventListener("click", () => {
  window.location.href = "./sign-up.html";
});
login.addEventListener("click", () => {
  window.location.href = "./sign-in.html";
});
