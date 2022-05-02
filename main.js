// DOM object for all squares
var allSquares = Array.from(document.querySelectorAll('.game-square'))

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
        numOfTurns++
        document.querySelector('.game-info').textContent = "It's Player Two's Turn"
    } else {
        e.target.textContent = oMarker
        turn = 1
        numOfTurns++
        document.querySelector('.game-info').textContent = "It's Player One's Turn"
    }
    // Disable clicked square
    e.target.removeEventListener('click', handleClick)
    // Check for win or tie
    checkForWin()
}


// Function that checks for a win or tie
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
    // Check for a tie
    } else if (numOfTurns === 9) {
        if (winnerName == "Player One") {
            playerOnesWins()
            disableAllSquares()
        } else if (winnerName == "Player Two") {
            playerTwoWins()
            disableAllSquares()
        } else {
            clearInterval(counter)
            disableAllSquares()
            document.querySelector('.game-info').textContent = "It's A Tie!"
            document.querySelector('.timer').textContent = "Game Over!"
        }
    }
}

var numOfWinsP1 = 0 
var numOfWinsP2 = 0

function playerOnesWins() {
    winnerName = "Player One"
    numOfWinsP1++
    document.querySelector('.game-info').textContent = "Player One Wins!"
    clearInterval(counter)
    document.querySelector('.timer').textContent = "Game Over!"
    document.querySelector('#p1-win-counter').textContent = numOfWinsP1
}

function playerTwoWins() {
    winnerName = "Player Two"
    numOfWinsP2++
    document.querySelector('.game-info').textContent = "Player Two Wins!"
    clearInterval(counter)
    document.querySelector('.timer').textContent = "Game Over!"
    document.querySelector('#p2-win-counter').textContent = numOfWinsP2
}

function disableAllSquares() {
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].removeEventListener('click', handleClick)
        allSquares[i].removeEventListener('click', resetTimer)
    }
}



// New game button to start a new game
var newGameBtn = document.querySelector('.new-game-btn')

newGameBtn.addEventListener('click', startNewGame)

var count
var counter

function startNewGame() {
    // Reset turn & winner variables
    turn = 1
    numOfTurns = 0
    winnerName = ""
    // Activate all squares
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].addEventListener('click', handleClick)
        allSquares[i].addEventListener('click', resetTimer)
        allSquares[i].textContent = ""
    }
    // Update game info that's displayed
    document.querySelector('.game-info').removeAttribute('id');
    document.querySelector('.game-info').textContent = "It's Player One's Turn"
    document.querySelector('.timer').removeAttribute('id');
    document.querySelector('.timer').textContent = "Shot Clock: 5 Seconds"
    // Start a new timer
    count = 5
    clearInterval(counter)
    counter = setInterval(countdown, 1000)
}

// Shot Clock
function countdown() {
    count--
    if (count <= 0) {
        disableAllSquares()
        document.querySelector('.game-info').textContent = "Game Over!"
        document.querySelector('.timer').textContent = "Shot Clock: Expired"
        allSquares.forEach(square => square.removeEventListener('click', resetTimer))
    } else {
        document.querySelector('.timer').textContent = "Shot Clock: " + count + " seconds"
    }
}

// Reset shot clock when a marker is placed
function resetTimer() {
    clearInterval(counter)
    count = 5
    counter = setInterval(countdown, 1000)
    document.querySelector('.timer').textContent = "Shot Clock: 5 Seconds"
}
allSquares.forEach(square => square.addEventListener('click', resetTimer))

