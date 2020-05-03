// Get player's name:
// let person = window.prompt("Hi! What's your name?");
// let txt;
// if (person === null || person === "") {
//   txt = 'No Name';
// } else {
//   txt = person;
// }
// document.getElementById("name").innerHTML = txt.toUpperCase();


// Function starts here:
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
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
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
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
        
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
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
    }
}
