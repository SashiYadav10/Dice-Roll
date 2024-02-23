document.querySelector("button").addEventListener("click", function(){
    diceRoll();
})

function diceRoll() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var firstImage = randomNumber1;
    var secondImage = randomNumber2;
    document.querySelector("img.img1").setAttribute("src", "./images/dice" + firstImage + ".png");
    document.querySelector("img.img2").setAttribute("src", "./images/dice" + secondImage + ".png");
    if(firstImage > secondImage) {
        document.querySelector("h1").innerHTML = ":) Player1 Wins";
    } else if(firstImage < secondImage) {
        document.querySelector("h1").innerHTML = "Player2 Wins :)";
    } else {
        document.querySelector("h1").innerHTML = "It's a draw!";
    }
}