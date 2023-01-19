let token = localStorage.getItem("token");
if (token) {
  window.location.href = "./main.html";
}
let registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector(".name").value;
  let phone = document.querySelector(".phone").value;
  let password = document.querySelector(".password").value;

  let obj = new Object();
  obj = {
    name,
    phone,
    password,
  };

  httpGet("https://yellow-suits-pump-185-139-137-28.loca.lt/api/user", obj);
});

async function httpGet(url, data = {}) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
