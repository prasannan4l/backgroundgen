var lodash = require('lodash');

var aray = [1,2,3,4,5,6,7,8];
console.log('answer:', lodash.without(aray, 4));

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var dombody = document.querySelector("body");


function setBodyBackground(){
  clearTextValue();
  dombody.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  setTextValue();
}

function setTextValue(){
  h3.innerText = "Gradient Value : linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.classList.add("animated", "tada");
}

function clearTextValue(){
  h3.innerText = "";
}

color1.addEventListener("input", setBodyBackground);
color2.addEventListener("input", setBodyBackground);
