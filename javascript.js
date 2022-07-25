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
    try {
        let part1 = word[0].toUpperCase();
        let part2 = word.slice(1).toLowerCase();
        return(part1+part2)
    } catch (error) {
        
    }
    
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
    console.log(playerAnswer)
    while(playerAnswer==null){
        playerAnswer = prompt("Choose Rock,Paper,Scissor : ");
        if(playerAnswer!=null){
            break;
        }
    } 
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
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);    

    } else if (playerScore<computerScore){
        console.log("You Lost! Against the machine");
        console.log("The final score is: ");
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);   
    }  else if (playerScore==computerScore){
        console.log("It is a tie!");
        console.log("The final score is: ");
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);   
    }
}

/* Game declaration */
/* game() */




/* Deletes element */
function delElement(child){
    console.log("Hola");
    let element = document.getElementById(child);
    console.log("Adios")
    let deletedElement = element.parentNode.removeChild(element);
    return deletedElement;
};


/*Function to restore deleted Element */
function restoreElement(deletedElement){
    mainContainer.insertBefore(deletedElement,footer)
}

/* Elements of the DOM */
const mainContainer = document.querySelector(".mainContainer");
const footer = document.querySelector(".footer");
const start  = document.querySelector("#startButton");

/*RPS gameContent*/
const gameContent = document.createElement('div');
gameContent.setAttribute("id","gameContent")
gameContent.classList.add('gameContent');

/*menu*/
const menu = document.createElement('div');
menu.classList.add("menu");
gameContent.appendChild(menu);

/* menuButton */
const menuButton = document.createElement('img');
menuButton.classList.add("imageMenu")
menuButton.src = "./images/home.png";
menu.appendChild(menuButton);

/*menuReset */
const menuReset = document.createElement('div');
menuReset.classList.add("menuReset");
menuReset.textContent = "Reset";
menu.appendChild(menuReset);


/*RPS HUD BAR */
const statsHUD = document.createElement('div');
statsHUD.classList.add("statsHUD");
gameContent.appendChild(statsHUD);


/* Round */
const roundHUD = document.createElement('div');
roundHUD.classList.add("roundHUD");
roundHUD.textContent = "Round 0";
statsHUD.appendChild(roundHUD);


/* Score */
const scoreHUD = document.createElement('div');
scoreHUD.classList.add("scoreHUD");
scoreHUD.textContent = "Human: 0  CPU: 0";
statsHUD.appendChild(scoreHUD);

/* Choices */
const choiceHUD = document.createElement('div');
choiceHUD.classList.add("choiceHUD");
gameContent.appendChild(choiceHUD);

/*choice*/

const rock = document.createElement('div');
rock.classList.add("choiceItem");
choiceHUD.appendChild(rock);



/*Rock*/
const rockImage = document.createElement('img');
rockImage.classList.add("imageChoice")
rockImage.src = "./images/home.png";
rock.appendChild(rockImage);

const rockText = document.createElement('div');
rockText.classList.add("rockText");
rockText.textContent = "ROCK!";
rock.appendChild(rockText)


/*Paper*/
const paper = document.createElement('img');
paper.classList.add("imageChoice")
paper.src = "./images/paper.png";
choiceHUD.appendChild(paper);

/*Scissor*/
const scissor = document.createElement('img');
scissor.classList.add("imageChoice")
scissor.src = "./images/home.png";
choiceHUD.appendChild(scissor);



menuButton.addEventListener ("click", () => {
    delElement("gameContent");
    restoreElement(deletedElement);

}); 



let addGame = () =>{
    mainContainer.insertBefore(gameContent,footer);
}





start.addEventListener("click", () => {
    deletedElement = delElement("mainContent");
    addGame();    
}
);


