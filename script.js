// Initialize variables
var player = 1;
var board = ["", "", "", "", "", "", "", "", ""];
var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Get all the cells in the table
var cells = document.querySelectorAll("td");

// Add click event listeners to each cell
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

// Add click event listener to the restart button
var restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", restartGame);

// Function to handle cell clicks
function cellClicked(event) {
  // Get the ID of the clicked cell
  var cellId = event.target.getAttribute("id");
  
  // Check if the cell is already occupied
  if (board[cellId] !== "") {
    alert("This cell is already occupied. Please choose another cell.");
    return;
  }
  
  // Update the board and the UI
  board[cellId] = player;
  event.target.textContent = player === 1 ? "X" : "O";
  
  // Check if the game has ended
  if (checkForWin() || checkForTie()) {
    return;
  }
  
  // Switch to the other player
  player = player === 1 ? 2 : 1;
  
  // Update the status message
  var statusMessage = document.querySelector("#status");
  statusMessage.textContent = "Player " +
