/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  let pintas = ["♦", "♥", "♠", "♣"];

  function aleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let valorAleatorio = aleatorio(cardValue);
  let pintaAleatoria = aleatorio(pintas);

  document.querySelector(".cardValue").innerHTML = valorAleatorio;

  document.querySelectorAll(".pintas").forEach(elementoPinta => {
    elementoPinta.innerHTML = pintaAleatoria;

    if (pintaAleatoria == "♥" || pintaAleatoria == "♦") {
      elementoPinta.style.color = "red";
    }
  });
};
