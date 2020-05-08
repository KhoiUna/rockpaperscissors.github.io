// Audio:
function angry() {
    var angry = new Audio('angry.mp3');
    angry.play();    
    angry.volume = 0.3;
};

function laugh() {
    var laugh = new Audio('laugh.mp3');
    laugh.play();    
    laugh.volume = 0.3;
};

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
let khoiscore = 0;
let yourscore = 0;

function disableRPSButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

function getRandom() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return randomChoice = Math.floor(Math.random() * 3) + 1; //The maximum is inclusive and the minimum is inclusive       
}

const myChoice = () => {   // This is Khoi's choice
    getRandom();
    if (randomChoice === 1) {
        document.getElementById("mychoice").src = "myrock.jpg";
        return khoiChoice = "rock";
    } else if (randomChoice === 2) {
        document.getElementById("mychoice").src = "mypaper.jpg";
        return khoiChoice = "paper";
    } else {
        document.getElementById("mychoice").src = "myscissors.jpg";
        return khoiChoice = "scissors";
    }
}

// Function Rock, Paper, Scissors to call & compare:
const rock = () => {
    myChoice();    
    if (khoiChoice === "rock") {
        document.getElementById("score").innerHTML = "IT'S A TIE!";
    } else if (khoiChoice === "paper") {
        document.getElementById("score").innerHTML = "KHOI WON!";
        document.getElementById("myface").src = "happyface.jpg";
        laugh();
        khoiscore ++;
        document.getElementById("khoiscore").innerHTML = khoiscore;
        if (khoiscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
        }
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
        yourscore ++;
        document.getElementById("yourscore").innerHTML = yourscore;
        if (yourscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
        }
    }
}

const paper = () => {
    myChoice();    
    if (khoiChoice === "paper") {
        document.getElementById("score").innerHTML = "IT'S A TIE!";
    } else if (khoiChoice === "scissors") {
        document.getElementById("score").innerHTML = "KHOI WON!";
        document.getElementById("myface").src = "happyface.jpg";   
        laugh();
        khoiscore ++;
        document.getElementById("khoiscore").innerHTML = khoiscore;        
        if (khoiscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
        }
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
        yourscore ++;
        document.getElementById("yourscore").innerHTML = yourscore;
        if (yourscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
        }
    }
}

const scissors = () => {
    myChoice();    
    if (khoiChoice === "scissors") {
        document.getElementById("score").innerHTML = "IT'S A TIE!";
    } else if (khoiChoice === "rock") {
        document.getElementById("score").innerHTML = "KHOI WON!";
        document.getElementById("myface").src = "happyface.jpg";
        laugh();
        khoiscore ++;
        document.getElementById("khoiscore").innerHTML = khoiscore;
        if (khoiscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
        }
    } else {
        document.getElementById("score").innerHTML = "YOU WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
        yourscore ++;
        document.getElementById("yourscore").innerHTML = yourscore;
        if (yourscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
        }
    }
}

// Player's choice starts here:
$(function() {
    $("#rock").click(function(){
        rock();
        $("#playerchoice").attr("src","rock.jpg");        
    });

    $("#paper").click(function(){
        paper();
        $("#playerchoice").attr("src","paper.jpg");        
    });

    $("#scissors").click(function(){
        scissors();
        $("#playerchoice").attr("src","scissors.jpg");             
    });
});
