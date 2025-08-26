/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Creamos un array con los valores de las cartas
  let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  //Creamos un array con los palos de las cartas
  let pintas = ["♦", "♥", "♠", "♣"];

  //Creamos un función que nos de un valor aleatorio de un Array. 
  // Esta función retorna un valor aleatorio que va desde el 0 hasta el último lugar del array
  function aleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  //Se le pasa como argumento a nuestra función el array con los valores de las cartas para conseguir un valor aleatorio
  let valorAleatorio = aleatorio(cardValue);
  //se le pasa como artumento a nuestra función aleatoria el array de las pintas para conseguir una pinta aleatoria
  let pintaAleatoria = aleatorio(pintas);

// Mostramos el valor aleatorio que conseguimos en nuestra página
  document.querySelector(".cardValue").innerHTML = valorAleatorio;

  //Seleccionamos los elementos que contengan la clase .pintas y le aplicamos un forEach 
  document.querySelectorAll(".pintas").forEach(elementoPinta => {
    elementoPinta.innerHTML = pintaAleatoria;

    if (pintaAleatoria == "♥" || pintaAleatoria == "♦") {
      elementoPinta.style.color = "red";
    }
  });
};
