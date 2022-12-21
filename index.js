function randomDice(){
var randomNum1 = Math.floor(Math.random() * 6 ) +1;
var randomNum2 = Math.floor(Math.random() * 6 ) +1;

document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNum1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNum2 +".png");

if (randomNum1 < randomNum2) {
    document.getElementById("dado").innerHTML = "Ganador jugador 2 🚩 ";
  } else if (randomNum1 > randomNum2) {
    document.getElementById("dado").innerHTML = "🚩 Ganador jugador 1";
  } else {
    document.getElementById("dado").innerHTML = "🚩 Empate 🚩 "
  }
}