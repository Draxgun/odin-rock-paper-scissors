console.log("Hello World");

/* Available choices */
let choices = ["Rock","Paper","Scissor"];

/* Function that makes computer choice */
function getcomputerChoice(){
    let computerChoice= choices[Math.floor(Math.random()*choices.length)]
    return computerChoice
}

/* Player selection case correction */
function correctCase(word){
    let part1 = word[0].toUpperCase();
    let part2 = word.slice(1).toLowerCase();
    return(part1+part2)
}

/* Player selection letter correction */
function correctWord(word){    
    if(word.slice(-1)=="s"){
        return word.slice(0,-1)
    } else {
        return word
    }
}

/* Player selection prompt */
function getplayerPrompt(){
    let playerAnswer = prompt("Choose Rock,Paper,Scissor : ");
    playerAnswer = correctCase(correctWord(playerAnswer));
    return playerAnswer
}

/* Check player choice if is viable */
function checkplayerChoice(playerAnswer){
    if(choices.includes(playerAnswer)){
        return true
    } else {
        return false
    }
}

/* Player selection*/
function getplayerChoice(){
    let playerAnswer = getplayerPrompt();
    
    while (checkplayerChoice(playerAnswer)==false) {
        alert("That option is not valid, select Rock,Paper or Scissor")
        playerAnswer = getplayerPrompt();
        if (checkplayerChoice(playerAnswer)==true) {            
            break;
        } 
    }
    return playerAnswer
}

/* Game function and logic */
function playRound(playerSelection,computerSelection){
    let gameStatus = 0;
    if (playerSelection==computerSelection){
        console.log("It's a tie!");
        return gameStatus=0;
    } 
    else if( playerSelection == "Rock" && computerSelection == "Scissor" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissor" && computerSelection == "Paper"){
            console.log("You win " + playerSelection + " beats " + computerSelection + "!");
            return gameStatus=1;
        }
    else if ( computerSelection == "Rock" && playerSelection == "Scissor" || computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Scissor" && playerSelection == "Paper") {
            console.log("You loose " + computerSelection + " beats " + playerSelection + "!");
            return gameStatus=-1;
        }
        
}


/* Game loop */
function game(){
    console.log("Welcome to rock paper scissors! ");
    console.log("This will be a best of 5")

    let playerScore = 0;
    let computerScore =0;
    for(let i =0;i<5;i++){
        
        let playerChoice = getplayerChoice();
        let computerChoice = getcomputerChoice();

        console.log(" ");
        console.log("Round " + parseInt(i+1))
        console.log("The player choice is: " + playerChoice)
        console.log("The computers choice is: " + computerChoice )


        let gameStatus = playRound(playerChoice,computerChoice);

        if (gameStatus==0){
            playerScore = playerScore;
            computerScore = computerScore;
        } else if (gameStatus==1) {
            playerScore++ ;
        } else if (gameStatus==-1) {
            computerScore++ ;
        }

        console.log("The score is: ");
        console.log("Player " + playerScore);
        console.log("Computer " + computerScore);      
    }

    console.log("");

    console.log("From a best of 5 this is the final score")

    if(playerScore>computerScore){
        console.log("You won! Against the machine");
        console.log("The final score is: ");
        console.log("Player " + playerScore);
        console.log("Computer " + computerScore);    

    } else if (playerScore<computerScore){
        console.log("You Lost! Against the machine");
        console.log("The final score is: ");
        console.log("Player " + playerScore);
        console.log("Computer " + computerScore);   
    }  else if (playerScore==computerScore){
        console.log("It is a tie!");
        console.log("The final score is: ");
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);   
    }
}

/* Game declaration */
game()

