let loginForm = document.getElementById("login-form");
let token = localStorage.getItem("token");
if (token) {
  window.location.href = "./main.html";
}
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginPhone = document.querySelector(".loginPhone").value;
  let loginPasword = document.querySelector(".loginPassword").value;
  let obj = {
    phone: loginPhone,
    password: loginPasword,
  };

  fetch("https://yellow-suits-pump-185-139-137-28.loca.lt/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Xato");
    })
    .then((data) => {
      console.log("mainga o't", data);
      if (data) {
        localStorage.setItem("token", data.token);
        window.location.href = "./main.html";
      }
    })
    .catch((e) => console.log(e));
});
