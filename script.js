var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomHex() {
  var hex = "0123456789ABCDEF";
  var int = Math.floor(Math.random() * 16);
  return hex[int];
}

function randColor() {
  var colString = "#";
  var counter = 6;
  while (counter > 0) {
    colString += randomHex();
    counter--;
  }
  return colString;
}

function setRandom() {
  color1.value = randColor();
  color2.value = randColor();
  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.onload = setGradient();
