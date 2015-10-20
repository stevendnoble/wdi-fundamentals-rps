'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    var playerMove = move || getInput();
    console.log("Player chooses " + playerMove);
    return playerMove;
}

function getComputerMove(move) {
    var computerMove = move || randomPlay();
    console.log("Computer chooses " + computerMove);
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'Tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'Computer';
        } else {
            winner = 'Player';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'Computer';
        } else {
            winner = 'Player';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'Computer';
        } else {
            winner = 'Player';
        }
    } else {
        console.log('Player entered a value other than rock, paper, or scissors.')
        winner = 'Nobody';
    }
    console.log(winner + " wins!")
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tieWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var winner = getWinner(getPlayerMove(), getComputerMove());
        if (winner == 'Player') {
            playerWins++;
        } else if (winner == 'Computer') {
            computerWins++;
        } else if (winner == 'Tie') {
            tieWins++;
        }
        console.log("Player: " + playerWins + ", Computer: " + computerWins + ", Ties: " + tieWins);
    }
    return [playerWins, computerWins];
}

playToFive();