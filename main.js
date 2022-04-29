// Set variables for each DOM object


// Start the game on player 1's turn 
var turn = 1
// Display that's it's player 1's turn
var gameInfo = document.querySelector('.game-info')

if (turn = 1) {
    gameInfo.textContent = "It's Player One's Turn"
}
// Allow player 1 to click any game square
var square1 = document.querySelector('#square-1')
var square2 = document.querySelector('#square-2')
var square3 = document.querySelector('#square-3')
var square4 = document.querySelector('#square-4')
var square5 = document.querySelector('#square-5')
var square6 = document.querySelector('#square-6')
var square7 = document.querySelector('#square-7')
var square8 = document.querySelector('#square-8')
var square9 = document.querySelector('#square-9')


var gameSquares = Array.from(document.querySelectorAll('.game-square'))

for (var i = 0; i < gameSquares.length; i++) {
    gameSquares[i].addEventListener('click', playerOneMove)
}

// Add "X" to the clicked square

function playerOneMove(event) {
    event.target.textContent = 'X'
}

// Check if player 1 wins

// if (all squares in row 1 = "X") 
//     alert "Player one wins"

if (square1 == "X" && square2 == "X" && square3 == "X") {
    gameInfo.textContent = "Player One Wins!"
}

// else if (all squares in row 2 = "X") 
//     alert "Player one wins"

// else if (all squares in row 3 = "X") 
//     alert "Player one wins"

// else if (all squares in column 1 = "X") 
//     alert "Player one wins"

// else if (all squares in column 2 = "X") 
//     alert "Player one wins"

// else if (all squares in column 3 = "X") 
//     alert "Player one wins"

// else if (squares 1 & 5 & 9 = "X") 
//     alert "Player one wins"

// else if (squares 3 & 5 & 7 = "X") 
//     alert "Player one wins"

// else 
// 	change turns


// If player 1 wins...
// Display "Player 1 Wins!"
// Disable all game squares from being clicked


// If player 1 does NOT win, make it player 2's turn
// Display that's it's player 2's turn
// Allow player 2 to click any game square
// Add "O" to the clicked square
// Disable the clicked square from being clicked again
// Check if player 2 wins


// If player 2 wins... 
// Display "Player 2 Wins!"
// Disable all game squares from being clicked


// If player 2 does NOT win, make it player 1's turn

// Create a rematch button
// If either player clicks the rematch button at any time...
// Clear all the X's & O's from all the game squares.
// Allow all game squares to be clicked
// Make it player 1's turn












// Start the game on player 1's turn 

// Display that's it's player 1's turn

// Allow player 1 to click any game square
// Add "X" to the clicked square
// Disable the clicked square from being clicked again
// Check if player 1 wins

// If player 1 wins...
// Display "Player 1 Wins!"
// Disable all game squares from being clicked


// If player 1 does NOT win, make it player 2's turn
// Display that's it's player 2's turn
// Allow player 2 to click any game square
// Add "O" to the clicked square
// Disable the clicked square from being clicked again
// Check if player 2 wins


// If player 2 wins... 
// Display "Player 2 Wins!"
// Disable all game squares from being clicked


// If player 2 does NOT win, make it player 1's turn

// Create a rematch button
// If either player clicks the rematch button at any time...
// Clear all the X's & O's from all the game squares.
// Allow all game squares to be clicked
// Make it player 1's turn









