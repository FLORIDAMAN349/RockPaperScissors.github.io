let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

rock.addEventListener("click", rock);
paper.addEventListener("click", paper);
scissor.addEventListener("click", scissor);

rock.addEventListener("click", getUserPick);
paper.addEventListener("click", getUserPick);
scissor.addEventListener("click", getUserPick);

var userChoice;

function rock() {
    userChoice = "rock";
}
function paper() {
    userChoice = "paper";
}
function scissor() {
    userChoice = "scissor";
}


/*again.addEventListener("click", restart)
document.addEventListener("click", start);*/
//This function returns "rock", "paper", or "scissors" based on a random integer.
function getComputerPick(){ 
    
    //initialize with a random integer between 1 and 3.
    var computerChoice = Math.floor(Math.random() * 3 ) + 1;
    
    console.log(computerChoice);
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else if (computerChoice == 3) {
        return "scissors";
    } else {
        console.log("Something is wrong please reload the page");
    }
}


//This function asks the user for a choice and returns that choice
function getUserPick() {   
if ((userChoice == "rock") || (userChoice == "paper") || (userChoice == "scissors")) {
        return userChoice;
    } else {
        console.log("Please type 'rock', 'paper', or 'scissors' only");
    }
}

//This function inputs both the user and random computer choice and compares them
//in order to determine the winner
function playRockPaperScissors(user, computer) {

    if ((user == "rock" && computer == "scissors") || (user == "scissors" && computer == "paper") || (user == "paper" && computer == "rock")) {
        console.log("You picked "+user);
        console.log("and the computer picked "+computer);
        alert("...YOU WIN! :D");
    } else if (user == computer) {
        console.log("You both picked "+user);
        alert("...YOU TIED");
    } else {
        console.log("You picked "+user);
        console.log("and the computer picked "+computer);
        alert("...YOU LOSE! :(");
    }
}

//calls the pick functions and plays the game!
var userPick = getUserPick();
var computerPick = getComputerPick();
