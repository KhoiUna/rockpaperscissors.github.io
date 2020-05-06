// Audio:
function angry() {
    var angry = new Audio('angry.mp3');
    angry.play();    
    angry.volume = 0.3;
}

function laugh() {
    var laugh = new Audio('laugh.mp3');
    laugh.play();    
    laugh.volume = 0.3;
}
//Background music:
const bgmusic = document.getElementById("bgmusic");
bgmusic.volume = 0.05;

function play() {    
    bgmusic.play();    
    bgmusic.volume = 0.05;
    bgmusic.muted = false;
}

function mute() {    
    bgmusic.muted = true;    
}

// Function for game starts here:
function getRandom() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1; //The maximum is inclusive and the minimum is inclusive       
}

function myChoice() {   // This is Khoi's choice
    let randomChoice = getRandom();
    if (randomChoice === 1) {
        document.getElementById("mychoice").src = "myrock.jpg";
        return myChoice = "rock";
    } else if (randomChoice === 2) {
        document.getElementById("mychoice").src = "mypaper.jpg";
        return myChoice = "paper";
    } else {
        document.getElementById("mychoice").src = "myscissors.jpg";
        return myChoice = "scissors";
    }
}

// Player's choice starts here:
function rock() {
    myChoice();
    document.getElementById("playerchoice").src = "rock.jpg";
    if (myChoice === "rock") {
        document.getElementById("score").innerHTML = "IT'S A TIE!";
    } else if (myChoice === "paper") {
        document.getElementById("score").innerHTML = "KHOI WON!";
        document.getElementById("myface").src = "happyface.jpg";
        laugh();
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
    }
}

function paper() {
    myChoice();
    document.getElementById("playerchoice").src = "paper.jpg";
    if (myChoice === "paper") {
        document.getElementById("score").innerHTML = "IT'S A TIE!";
    } else if (myChoice === "scissors") {
        document.getElementById("score").innerHTML = "KHOI WON!";
        document.getElementById("myface").src = "happyface.jpg";   
        laugh();     
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
        
    }
}

function scissors() {
    myChoice();
    document.getElementById("playerchoice").src = "scissors.jpg";
    if (myChoice === "scissors") {
        document.getElementById("score").innerHTML = "IT'S A TIE!";
    } else if (myChoice === "rock") {
        document.getElementById("score").innerHTML = "KHOI WON!";
        document.getElementById("myface").src = "happyface.jpg";
        laugh();
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
    }
}
