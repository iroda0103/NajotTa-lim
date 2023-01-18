let login = document.getElementById("login");
let password = document.getElementById("password");
let btn = document.querySelector("#btn");

const setToLocalStorage = () => {
  let loginValue = login.value;
  let passwordValue = password.value;

  localStorage.setItem("username", loginValue);
  localStorage.setItem("password", passwordValue);
};

const postUserPass = async () => {
  let user = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };

  let response = await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  postUserPass();
  setToLocalStorage();
});
