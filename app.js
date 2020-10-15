var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function convert(symbol){
    if(symbol == 'r') return "Rock";
    if(symbol == 'p') return "Paper";
    if(symbol == 's') return "Scissors";
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if(userChoice == 'r' && computerChoice == 's'){
        result_div.innerHTML = `Your ${convert(userChoice)} crushes AI's ${convert(computerChoice)}. Congratulations, You Won !!`;
    }
    else if(userChoice == 's' && computerChoice == 'p'){
        result_div.innerHTML = `Your ${convert(userChoice)} cuts AI's ${convert(computerChoice)}. Congratulations, You Won !!`;
    }
    else if(userChoice == 'p' && computerChoice == 'r'){
        result_div.innerHTML = `Your ${convert(userChoice)} covers AI's ${convert(computerChoice)}. Congratulations, You Won !!`;
    }
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if(userChoice == 'r' && computerChoice == 'p'){
        result_div.innerHTML = `Your ${convert(userChoice)} got covered by AI's ${convert(computerChoice)}. You Lost !!`;
    }
    else if(userChoice == 's' && computerChoice == 'r'){
        result_div.innerHTML = `Your ${convert(userChoice)} got crushed by AI's ${convert(computerChoice)}. You Lost !!`;
    }
    else if(userChoice == 'p' && computerChoice == 's'){
        result_div.innerHTML = `Your ${convert(userChoice)} got cut by AI's ${convert(computerChoice)}. You Lost !!`;
    }
}

function draw(userChoice,computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convert(userChoice)} and ${convert(computerChoice)}. Results in a draw`;
}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const random_index = (Math.floor(Math.random()*3));
    return choices[random_index];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    if(userChoice == 'r'){
        if(computerChoice == 'r'){
            draw(userChoice,computerChoice);
        }
        else if(computerChoice == 'p'){
            lose(userChoice,computerChoice);
        }
        else{
            win(userChoice,computerChoice);
        }
    }
    else if(userChoice == 'p'){
        if(computerChoice == 'r'){
            win(userChoice,computerChoice);
        }
        else if(computerChoice == 'p'){
            draw(userChoice,computerChoice);
        }
        else{
            lose(userChoice,computerChoice);
        }
    }
    else{
        if(computerChoice == 'r'){
            lose(userChoice,computerChoice);
        }
        else if(computerChoice == 'p'){
            win(userChoice,computerChoice);
        }
        else{
            draw(userChoice,computerChoice);
        }
    }

}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })

    paper_div.addEventListener('click',function(){
        game("p");
    })

    scissor_div.addEventListener('click',function(){
        game("s");
    })
}
main();


