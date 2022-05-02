// Make all squares clickable
var allSquares = Array.from(document.querySelectorAll('.game-square'))

for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener('click', handleClick)
}

// Place a marker inside clicked square
var xMarker = "X"
var oMarker = "O"
var turn = 1
var numOfTurns = 0
var winnerName = ""


function handleClick(e) {
    // Place marker & change turns
    if (turn === 1) {
        e.target.textContent = xMarker
        turn = 0
    } else {
        e.target.textContent = oMarker
        turn = 1
    }
    // Disable clicked square
    e.target.removeEventListener('click', handleClick)
    // Check for win
    checkForWin()
    // Check for tie
}

// Function that checks for a win
var s1 = document.querySelector('#square-1')
var s2 = document.querySelector('#square-2')
var s3 = document.querySelector('#square-3')
var s4 = document.querySelector('#square-4')
var s5 = document.querySelector('#square-5')
var s6 = document.querySelector('#square-6')
var s7 = document.querySelector('#square-7')
var s8 = document.querySelector('#square-8')
var s9 = document.querySelector('#square-9')


function checkForWin() {
    // Check to see if Player one wins
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
    // Check to see if Player two wins
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
    } else if (numOfTurns === 9) {
        if (winnerName == "Player One") {
            playerOnesWins()
        } else if (winnerName == "Player Two") {
            playerTwoWins()
        } else {
            document.querySelector('.game-info').textContent = "It's A Tie!"
        }
    }
}

function playerOnesWins() {
    winnerName = "Player One"
    document.querySelector('.game-info').textContent = "Player One Wins!"
    disableAllSquares()
}

function playerTwoWins() {
    winnerName = "Player Two"
    document.querySelector('.game-info').textContent = "Player Two Wins!"
    disableAllSquares()
}


function disableAllSquares() {
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].removeEventListener('click', handleClick)
    }
}


// Rematch button to restart game
var rematchBtn = document.querySelector('#rematch-btn')

rematchBtn.addEventListener('click', resetGame)

function resetGame() {
    turn = 1
    numOfTurns = 0
    winnerName = ""
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].addEventListener('click', handleClick)
        allSquares[i].textContent = ""
    }
    document.querySelector('.game-info').textContent = "It's Player One's Turn"
}

// Win Counter
var numOfWinsP1 = 0 
var numOfWinsP2 = 0

function winCounter() {
    if (winnerName == "Player One") {
        numOfWinsP1++
        document.querySelector('#p1-win-counter').textContent = numOfWinsP1
    } else if (winnerName == "Player Two") {
        numOfWinsP2++
        document.querySelector('#p2-win-counter').textContent = numOfWinsP2
    }
}

// Shot Clock
var count = 25
var counter = setInterval(countdown, 1000)

function countdown() {
    count -= 1
    if (count <= 0) {
        disableAllSquares()
        document.querySelector('.game-info').textContent = "Game Over! Time Ran Out."
        document.querySelector('#timer').textContent = "Shot Clock: 0 seconds"
        allSquares.forEach(square => square.removeEventListener('click', resetTimer))
    } else {
        document.querySelector('#timer').textContent = "Shot Clock: " + count + " seconds"
    }
}

// Reset shot clock on click
function resetTimer(event) {
    clearInterval(counter)
    count = 25
    counter = setInterval(countdown, 1000)
}
allSquares.forEach(square => square.addEventListener('click', resetTimer))