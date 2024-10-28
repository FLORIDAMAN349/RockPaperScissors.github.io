function getComputerPick(){ 
  
    //Here it makes a variable where it makes a random number between 1 and 3
    var computerChoice = Randomizer.nextInt(1,3)
    
    
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else if (computerChoice == 3) {
        return "scissors";
    } else {
        println("something is wrong please try again later")
    }
}
