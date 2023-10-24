var random1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + random1 + ".png");
var random2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + random2 + ".png");
if (random1 === random2) {
    document.querySelector("h1").innerHTML = "Tie!";
} else if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
} else if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
