//Player scores for evaluation
var player1Score = 6;
var Player2Score = 6;
//image array
var imageArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

//random number generator
// will generate nums. from 0-5
function diceRoll () {
    return Math.floor(Math.random() * Math.floor(6));
}


//change the image of player 1 & set score
function player1 () {
    var diceNum = diceRoll();
 document.querySelector(".img1").setAttribute("src", imageArray[diceNum]);
 player1Score = diceNum+1;
}

//change the image of player 2 & set score
function player2 () {
    var diceNum = diceRoll();
 document.querySelector(".img2").setAttribute("src", imageArray[diceNum]);
 player2Score = diceNum+1;
}


//Display the result
function diceResult () {
    if (player1Score > player2Score) {
        document.querySelector("h1").innerHTML = "Player 1 wins!!! 🏆";
    }
        else if (player2Score > player1Score) {
            document.querySelector("h1").innerHTML ="Player 2 wins!!! 🏆";
        }
        else {
          document.querySelector("h1").innerHTML = "It is a draw.... 😮";
        }
    }

//call the functions
player1 ();
player2 ();
diceResult ();
