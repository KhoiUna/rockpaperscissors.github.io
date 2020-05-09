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

function enableRPSButtons() {
    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;
}

function getRandom() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return randomChoice = Math.floor(Math.random() * 3) + 1; //The maximum is inclusive and the minimum is inclusive       
}

// Get player's name:
const showName = () => {        
    let name = document.getElementById("popup-player").value;
    document.getElementById("name").innerHTML = name.toUpperCase();  
};


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
    let name = document.getElementById("popup-player").value;
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
            $(".popup").fadeIn();
            document.getElementById("popup-heading").innerHTML = "GAME OVER!";
            document.getElementById("popup-body").innerHTML = "KHOI WON!";              
            document.getElementById("popup-body").style.color = "red";              
            }           
    } else {
        document.getElementById("score").innerHTML = name.toUpperCase() + " WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
        yourscore ++;
        document.getElementById("yourscore").innerHTML = yourscore;
        if (yourscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
            $(".popup").fadeIn();
            document.getElementById("popup-heading").innerHTML = "CONGRATS!";
            document.getElementById("popup-body").innerHTML = name.toUpperCase() + " WON!"; 
            document.getElementById("popup-body").style.color = "aqua";                            
        }
    }
}

const paper = () => {
    myChoice(); 
    let name = document.getElementById("popup-player").value;   
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
            $(".popup").fadeIn();
            document.getElementById("popup-heading").innerHTML = "GAME OVER!";
            document.getElementById("popup-body").innerHTML = "KHOI WON!";  
            document.getElementById("popup-body").style.color = "red";                 
        }
    } else {
        document.getElementById("score").innerHTML = name.toUpperCase() + " WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
        yourscore ++;
        document.getElementById("yourscore").innerHTML = yourscore;
        if (yourscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
            $(".popup").fadeIn();
            document.getElementById("popup-heading").innerHTML = "CONGRATS!";
            document.getElementById("popup-body").innerHTML = name.toUpperCase() + " WON!"; 
            document.getElementById("popup-body").style.color = "aqua";                      
        }
    }
}

const scissors = () => {
    myChoice();    
    let name = document.getElementById("popup-player").value;
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
            $(".popup").fadeIn();
            document.getElementById("popup-heading").innerHTML = "GAME OVER!";
            document.getElementById("popup-body").innerHTML = "KHOI WON!";  
            document.getElementById("popup-body").style.color = "red";                 
        }
    } else {
        document.getElementById("score").innerHTML = name.toUpperCase() + " WON!";
        document.getElementById("myface").src = "angryface.jpg";
        angry();
        yourscore ++;
        document.getElementById("yourscore").innerHTML = yourscore;
        if (yourscore === 3) {
            document.querySelector("#playagain").disabled = false;
            disableRPSButtons();
            $(".popup").fadeIn();
            document.getElementById("popup-heading").innerHTML = "CONGRATS!";
            document.getElementById("popup-body").innerHTML = name.toUpperCase() + " WON!";  
            document.getElementById("popup-body").style.color = "aqua";                     
        }
    }
}

// Player's choice starts here:
$(function() {         
    disableRPSButtons();
    
    $("#continue").click(function(){
        showName();
        enableRPSButtons();
        $(".popup-name").fadeOut();
    });
    
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
