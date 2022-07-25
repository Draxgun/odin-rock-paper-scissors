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
        let gameText  = "It's a tie!";
        gameStatus =0;
        return [gameStatus,gameText];
    } 
    else if( playerSelection == "Rock" && computerSelection == "Scissor" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissor" && computerSelection == "Paper"){
            let gameText= "You win " + playerSelection + " beats " + computerSelection + "!";
            gameStatus = 1
            return [gameStatus,gameText];;
        }
    else if ( computerSelection == "Rock" && playerSelection == "Scissor" || computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Scissor" && playerSelection == "Paper") {
            let gameText = "You loose " + computerSelection + " beats " + playerSelection + "!";
            gameStatus=-1;
            return [gameStatus,gameText]
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


/* Initial Value */
let round = 0;
let playerScore = 0;
let cpuScore  = 0;


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
roundHUD.textContent = `Round ${round}`;
statsHUD.appendChild(roundHUD);

/* Score */
const scoreHUD = document.createElement('div');
scoreHUD.classList.add("scoreHUD");
scoreHUD.textContent = `Human: ${playerScore}  CPU: ${cpuScore}`;
statsHUD.appendChild(scoreHUD);

/* Choose your weapon text! */
const textChoice = document.createElement("div");
textChoice.classList.add("textChoice");
textChoice.textContent = "Choose your weapon!";
gameContent.appendChild(textChoice);

/* Choices */
const choiceHUD = document.createElement('div');
choiceHUD.classList.add("choiceHUD");
gameContent.appendChild(choiceHUD);

/*choice*/

/*Rock*/
const rock = document.createElement('div');
rock.classList.add("choiceItem");
choiceHUD.appendChild(rock);

const rockImage = document.createElement('img');
rockImage.classList.add("imageChoice")
rockImage.src = "./images/rock.png";
rock.appendChild(rockImage);

const rockText = document.createElement('div');
rockText.classList.add("textChoice");
rockText.textContent = "ROCK!";
rock.appendChild(rockText)

/*Paper*/

const paper = document.createElement('div');
paper.classList.add("choiceItem");
choiceHUD.appendChild(paper);

const paperImage = document.createElement('img');
paperImage.classList.add("imageChoice")
paperImage.src = "./images/paper.png";
paper.appendChild(paperImage);

const paperText = document.createElement('div');
paperText.classList.add("textChoice");
paperText.textContent = "PAPER!";
paper.appendChild(paperText)


/*Scissor*/
const scissor = document.createElement('div');
scissor.classList.add("choiceItem");
choiceHUD.appendChild(scissor);

const scissorImage = document.createElement('img');
scissorImage.classList.add("imageChoice")
scissorImage.src = "./images/scissor.png";
scissor.appendChild(scissorImage);

const scissorText = document.createElement('div');
scissorText.classList.add("textChoice");
scissorText.textContent = "SCISSOR!";
scissor.appendChild(scissorText)


/* Robot choice */
const robotChoice = document.createElement('div');
robotChoice.classList.add("robotChoice");
gameContent.append(robotChoice)

/* Robot Head */
const robotHead = document.createElement('img');
robotHead .classList.add("imageChoice")
robotHead .src = "./images/robotHead.png";
robotChoice.appendChild(robotHead);

/* Robot Text */
const robotText = document.createElement('div');
robotText.classList.add("textChoice");
robotText.setAttribute('id','robotText');
robotChoice.append(robotText);


/*Game output */
const winnerText = document.createElement("div");
winnerText.classList.add("textChoice");
winnerText.textContent = "";
winnerText.setAttribute('id','winnerText');
gameContent.append(winnerText);


let addGame = () =>{
    mainContainer.insertBefore(gameContent,footer);
}

/* StartGAME */
start.addEventListener("click", () => {
    deletedElement = delElement("mainContent");
    addGame();    
}
);

/* Return to menu button */
menuButton.addEventListener ("click", () => {
    delElement("gameContent");
    restoreElement(deletedElement);
    resetScore();
}); 

/*Reset*/
menuReset.addEventListener("click",() => {
    resetScore();
});

/* Gameplay */
rock.addEventListener("click", () =>{
    let playerChoice = "Rock";
    playGame(playerChoice);

});

paper.addEventListener("click",() =>{
    let playerChoice = "Paper";
    playGame(playerChoice);
});

scissor.addEventListener("click",() => {
    let playerChoice = "Scissor";
    playGame(playerChoice)
});

/* Function that plays game */
let playGame = (playerChoice)=>{
    let computerChoice = getcomputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    let gameResult = playRound(playerChoice,computerChoice);
    let gameStatus = gameResult[0];
    let gameText   = gameResult[1];
    robotText.textContent = `My choice is ${computerChoice}!`;
    winnerText.textContent = gameText;
    round++;
    if (gameStatus==0){
        playerScore = playerScore;
        cpuScore = cpuScore;
    } else if (gameStatus==1) {
        playerScore++ ;
    } else if (gameStatus==-1) {
        cpuScore++ ;
    }
    updateScore();
    
};

let resetScore = () => {
    playerScore = 0;
    cpuScore = 0;
    round = 0
    updateScore();
}


/* Function that updates score and round */
let updateScore = () => {
    scoreHUD.textContent = `Human: ${playerScore}  CPU: ${cpuScore}`;
    roundHUD.textContent = `Round ${round}`;

}

