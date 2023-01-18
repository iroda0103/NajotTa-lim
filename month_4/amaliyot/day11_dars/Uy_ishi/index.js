// fetch("https://7552-89-146-86-118.eu.ngrok.io/api/user").then((value) =>
//   console.log(value)
// );
fetch("https://7552-89-146-86-118.eu.ngrok.io/api/products", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "no",
  },
}).then((value) => console.log(value));
