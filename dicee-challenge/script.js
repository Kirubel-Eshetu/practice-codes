var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
}
    
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw! 🎲";
}

else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
}
