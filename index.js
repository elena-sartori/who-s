
function who(){

var randomNumber = Math.floor(Math.random() * 4) + 1;

var randomImage = "images/" + randomNumber + ".png";

var img = document.querySelectorAll("img")[0];
var img2 =  document.querySelectorAll("img")[1];

img.setAttribute("src", randomImage);


 switch(randomNumber){
  case 1: document.querySelector("h1").innerHTML = "Megan"; break;
  case 2: document.querySelector("h1").innerHTML = "Giulia"; break;
  case 3: document.querySelector("h1").innerHTML = "Elena"; break;
  case 4: document.querySelector("h1").innerHTML = "Camilla"; break;
  default: document.querySelector("h1").innerHTML = "Nessuno";
}

}
