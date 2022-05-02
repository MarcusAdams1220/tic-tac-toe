# Tic Tac Toe
## Summary Of Project
## Plan / Approach I Took To Solve The Problem

### HTML Wireframe
  <img src="./Images/Tic-Tac-Toe Wireframe.png" alt="">

### Flowchart
  <img src="./Images/Tic-Tac-Toe Flowchart.png" alt="">

### JS Plan
// Function to change turns
    // Store the current turn in a globally scoped variable
    // If statement to check who's turn it is
    // Display who's turn into it is currently
    // Change the stored turn


// Make all squares clickable
    // Create DOM objects for each square
    // 'Click' event listeners for each square

// Function that allows players to place markers
    // If statement to check who's turn it is
    // Fill square with the right marker based on turn
    // Remove event listener from the clicked square
    // Check for a winner after each square => create a function for this

// Function to check for a winner
    // If statements for each win possibilty
    // If player one wins, invoke a 'player one wins' function
    // If player two wins, invoke a 'player two wins' function
    // If there is no winner, invoke the change turns function

// Create a player x wins function
    // Store the winners name in a variable
    // Display the name of the winner
    // Disable all squares from being clicked => Can be reversed with a rematch button


// Function to prevent all squares from being clicked after a win
    // Loop though each square & remove the 'click' event listener


// Make a function for the rematch button to reset the game
    // Add an 'click' event listener to the rematch button
    // Make is player one's turn
    // Set the winner's name to ""
    // Remove the content from each square
    // Add 'click event listeners to every square to make them clickable

## Code I'm Proud Of
## Lessons I Learnt

<a href="https://marcusadams1220.github.io/tic-tac-toe/">Click Here To Play The Game</a>
