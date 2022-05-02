// Custom names
var p1Input = document.querySelector('#player-one-input')
var p2Input = document.querySelector('#player-two-input')
var p1name
var p1name

document.querySelector('.start-btn').addEventListener('click', setName)

function setName() {
    p1name = document.querySelector('#player-one-input').value
    p2name = document.querySelector('#player-two-input').value
    document.querySelector('.p1-name-label').setAttribute("id", "hidden")
    document.querySelector('.p2-name-label').setAttribute("id", "hidden")
    document.querySelector('#player-one-input').setAttribute("id", "hidden")
    document.querySelector('#player-two-input').setAttribute("id", "hidden")
    document.querySelector('.start-btn').setAttribute("id", "hidden")
    document.querySelector('.rematch-btn').removeAttribute("id", "hidden")
    // document.querySelector('#player-two-input').removeAttribute()
    // document.querySelector('#player-two-input').removeAttribute()
    // document.querySelector('#player-two-input').removeAttribute()
}


// <------- Core Game ------>

// Function to change turns
var turn = 1

function changeTurn() {
    if (turn === 1) {
        document.querySelector('.game-info').textContent = "It's " + p1name + "'s turn"
        turn = "p2"
    } else {
        document.querySelector('.game-info').textContent = "It's " + p2name + "'s turn"
        turn = 1
    }
}

// DOM objects for each square
var s1 = document.querySelector('#square-1')
var s2 = document.querySelector('#square-2')
var s3 = document.querySelector('#square-3')
var s4 = document.querySelector('#square-4')
var s5 = document.querySelector('#square-5')
var s6 = document.querySelector('#square-6')
var s7 = document.querySelector('#square-7')
var s8 = document.querySelector('#square-8')
var s9 = document.querySelector('#square-9')

// 'Click' event listeners for each square 
var allSquares = Array.from(document.querySelectorAll('.game-square'))

function startGame() {
    allSquares.forEach(square => square.addEventListener('click', placeMarker))
}

// Function to place marker on clicked square & check results
function placeMarker(e) {
    if (turn === 1) {
        e.target.textContent = 'X'
        e.target.removeEventListener('click', placeMarker)
        numOfTurns++
        checkForWinner()
        winCounter()
    } else {
        e.target.textContent = 'O'
        e.target.removeEventListener('click', placeMarker)
        numOfTurns++
        checkForWinner()
        winCounter()
    }
}

// Function to prevent all squares from being clicked
function disableAllSquares() {
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].removeEventListener('click', placeMarker)
    }
}

// Store name of the winner
var winnerName = ""

// Function to display that player one is the winner
function playerOnesWins() {
    winnerName = "Player One"
    document.querySelector('.game-info').textContent = "Player One Wins!"
    disableAllSquares()
}

// Function to display that player two is the winner
function playerTwoWins() {
    winnerName = "Player Two"
    document.querySelector('.game-info').textContent = "Player Two Wins!"
    disableAllSquares()
}

// Store the total number of turns
var numOfTurns = 0

// Check if either player is the winner
function checkForWinner() {
    // Check if Player one wins
    if (s1.textContent == "X" && s2.textContent == "X" && s3.textContent == "X")  { // => Row 1 
        playerOnesWins()
        disableAllSquares()
    } else if (s4.textContent == "X" && s5.textContent == "X" && s6.textContent == "X") { // => Row 2
        playerOnesWins()
        disableAllSquares()
    } else if (s7.textContent == "X" && s8.textContent == "X" && s9.textContent == "X") { // => Row 3
        playerOnesWins()
        disableAllSquares()
    } else if (s1.textContent == "X" && s4.textContent == "X" && s7.textContent == "X") { // => Column 1
        playerOnesWins()
        disableAllSquares()
    } else if (s2.textContent == "X" && s5.textContent == "X" && s8.textContent == "X") { // => Column 2
        playerOnesWins()
        disableAllSquares()
    } else if (s3.textContent == "X" && s6.textContent == "X" && s9.textContent == "X") { // => Column 3
        playerOnesWins()
        disableAllSquares()
    } else if (s1.textContent == "X" && s5.textContent == "X" && s9.textContent == "X") { // => Diagonal Left to Right
        playerOnesWins()
        disableAllSquares()
    } else if (s3.textContent == "X" && s5.textContent == "X" && s7.textContent == "X") { // => Diagonal Right to Left
        playerOnesWins()
        disableAllSquares()
    // Check if Player two wins
    } else if (s1.textContent == "O" && s2.textContent == "O" && s3.textContent == "O")  { // => Row 1 
        playerTwoWins()
        disableAllSquares()
    } else if (s4.textContent == "O" && s5.textContent == "O" && s6.textContent == "O") { // => Row 2
        playerTwoWins()
        disableAllSquares()
    } else if (s7.textContent == "O" && s8.textContent == "O" && s9.textContent == "O") { // => Row 3
        playerTwoWins()
        disableAllSquares()
    } else if (s1.textContent == "O" && s4.textContent == "O" && s7.textContent == "O") { // => Column 1
        playerTwoWins()
        disableAllSquares()
    } else if (s2.textContent == "O" && s5.textContent == "O" && s8.textContent == "O") { // => Column 2
        playerTwoWins()
        disableAllSquares()
    } else if (s3.textContent == "O" && s6.textContent == "O" && s9.textContent == "O") { // => Column 3
        playerTwoWins()
        disableAllSquares()
    } else if (s1.textContent == "O" && s5.textContent == "O" && s9.textContent == "O") { // => Diagonal Left to Right
        playerTwoWins()
        disableAllSquares()
    } else if (s3.textContent == "O" && s5.textContent == "O" && s7.textContent == "O") { // => Diagonal Right to Left
        playerTwoWins()
        disableAllSquares()
    // Check for a tie if there's no winner after 9 moves
    } else if (numOfTurns === 9) {
        if (winnerName == "Player One") {
            playerOnesWins()
        } else if (winnerName == "Player Two") {
            playerTwoWins()
        } else {
            document.querySelector('.game-info').textContent = "It's A Tie!"
        }
    // Change turns if there's no winner AND no tie
    } else {
        changeTurn()
    }
}

// DOM object for rematch button
var rematchBtn = document.querySelector('.rematch-btn')

// 'Click' event listener for rematch button
rematchBtn.addEventListener('click', resetGame)

// Function to reset the game when rematch button is clicked
function resetGame() {
    turn = 1
    numOfTurns = 0
    winnerName = ""
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].addEventListener('click', placeMarker)
        allSquares[i].textContent = ""
    }
    document.querySelector('.game-info').textContent = "It's Player One's Turn"
}

// Store the number of wins for each player
var numOfWinsP1 = 0 
var numOfWinsP2 = 0

// Function to count & display each players total wins
function winCounter() {
    if (winnerName == "Player One") {
        numOfWinsP1++
        document.querySelector('#p1-win-counter').textContent = numOfWinsP1
    } else if (winnerName == "Player Two") {
        numOfWinsP2++
        document.querySelector('#p2-win-counter').textContent = numOfWinsP2
    }
}