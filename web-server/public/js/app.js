console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  // fetch("http://localhost:3000/weather?address=" + location).then(response => {
  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.errorMessage) {
        messageOne.textContent = data.errorMessage;
      } else {
        const mensaje = `La temperatura actual es ${data.forecast.temperatura} 
              pero se siente una temperatura de ${data.forecast.sensacion}`;
        messageOne.textContent = data.location;
        messageTwo.textContent = mensaje;
      }
    });
  });
});
