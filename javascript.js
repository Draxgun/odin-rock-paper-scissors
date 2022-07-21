console.log("Hello World");

/* Available choices */
let choices = ["Rock","Paper","Scissor"]

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
        alert("That option is not valid, Select Rock,Paper or Scissor")
        playerAnswer = getplayerPrompt();
        if (checkplayerChoice(playerAnswer)==true) {            
            break;
        } 
    }
    return playerAnswer
}




/* Players and computer choices */
const playerSelection   = getplayerChoice();
const computerSelection = getcomputerChoice(choices);

console.log(computerSelection);
console.log(playerSelection)


/* Game function and logic */
function playRound(playerSelection,computerSelection){
    if (playerSelection==computerSelection){
        console.log("It's a tie!")
    } 
    else if( playerSelection == "Rock" && computerSelection == "Scissor" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissor" && computerSelection == "Paper"){
            console.log("You win " + playerSelection + " beats " + computerSelection + "!");
        }
    else if ( computerSelection == "Rock" && playerSelection == "Scissor" || computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Scissor" && playerSelection == "Paper") {
            console.log("You loose " + computerSelection + " beats " + playerSelection + "!");
        }
}


/* play round test */
console.log(playRound(playerSelection,computerSelection))