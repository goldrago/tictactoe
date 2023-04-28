// Create the game board
var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Create the player variables
var player1 = "X";
var player2 = "O";
var currentPlayer = player1;

// Create the function to handle a mouse click on a board cell
function cellClick(event) {
  // Get the cell ID
  var cellId = event.target.id;

  // Check if the cell is empty
  if (board[cellId / 3][cellId % 3] === null) {
    // Set the cell value to the current player
    board[cellId / 3][cellId % 3] = currentPlayer;

    // Check if the current player has won
    if (checkWin(currentPlayer)) {
      // Display a win message
      alert("Player " + currentPlayer + " has won!");

      // Restart the game
      restartGame();
    } else if (isDraw()) {
      // Display a draw message
      alert("The game is a draw!");

      // Restart the game
      restartGame();
    } else {
      // Switch players
      currentPlayer = (currentPlayer === player1) ? player2 : player1;
    }
  }
}

// Create the function to check if a player has won
function checkWin(player) {
  // Check for a win in each row
  for (var i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === player) {
      return true;
    }
  }

  // Check for a win in each column
  for (var i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === player) {
      return true;
    }
  }

  // Check for a win in each diagonal
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === player) {
    return true;
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] === player) {
    return true;
  }

  // No winner
  return false;
}

// Create the function to check if the game is a draw
function isDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        return false;
      }
    }
  }

  // All cells are filled, so it's a draw
  return true;
}

// Create the function to restart the game
function restartGame() {
  // Clear the board
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      board[i][j] = null;
    }
  }

  // Set the current player
  currentPlayer = player1;
}

// Initialize the game
window.onload = function() {
  // Add event listeners to all the cells
  for (var i = 0; i < 9; i++) {
    document.getElementById(i + 1).addEventListener("click", cellClick);
  }
};
