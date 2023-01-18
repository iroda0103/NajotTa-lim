let a = localStorage.getItem("userId");

fetch(`https://jsonplaceholder.typicode.com/users/${a}`)
  .then((response) => response.json())
  .then((json) => userNews(json));

let userHtmlNews = document.querySelector(".usersNew");
function userNews(user) {
  // let a = localStorage.getItem("userId");
  // users.forEach((user) => {
  //   if (user.id == a) {
  document.querySelector(".usersNew").innerText = user.name;
  document.querySelector(".name").innerText = user.name;
  document.querySelector(".userName").innerText = user.username;
  document.querySelector(".email").innerText = user.email;
  document.querySelector(".address").innerText = user.address;
  document.querySelector(".address").innerText = user.address.city;
  document.querySelector(".phone").innerText = user.phone;
  document.querySelector(".website").innerText = user.website;
  document.querySelector(".company").innerText = user.company.name;
  // }
  // });
}
