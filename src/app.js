/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const palo = ["♥", "♠", "♦", "♣"];
  const numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function figuraRandom() {
    let paloRandom = Math.floor(Math.random() * palo.length);
    return palo[paloRandom];
  }

  function numRandom() {
    let numeroRandom = Math.floor(Math.random() * numero.length);
    return numero[numeroRandom];
  }

  let paloFinal = figuraRandom();

  document.getElementById("paloArriba").innerHTML = paloFinal;
  document.getElementById("numeroCentral").innerHTML = numRandom();
  document.getElementById("paloAbajo").innerHTML = paloFinal;
};
