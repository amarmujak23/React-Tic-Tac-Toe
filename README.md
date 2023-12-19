# React-Tic-Tac-Toe

HTML/CSS:
The HTML structure is minimal, containing a container with a table that represents the Tic Tac Toe grid.
CSS is used to style the game. The cells in the grid are styled to have a border, animation for a floating effect, and color change on hover.
There's a restart button styled with a different color on hover for user interaction.
React Components:
The TicTacToe component is the main component rendering the game.
It maintains the game state with React hooks like useState. It tracks the current player's turn ('x' or 'o'), the cells on the board, the winner, and if the game ends in a draw.
winningCombos is an array containing all possible winning combinations on the Tic Tac Toe board.
checkForWinner function checks the current squares against the winning combinations to determine if there's a winner.
checkDraw function checks if the game ends in a draw by verifying if all cells are filled.
handlePlayerMove function handles the player's move by updating the cell with 'x' and checking for a winner or draw.
handleComputerMove function simulates the computer's move by choosing a random available cell with 'o'.
handleRestart function resets the game state to play again.
The Cell component represents each cell in the table and handles user clicks to place their move.
Gameplay Logic:
The game alternates between the player and the computer for moves.
Upon a player's move, the computer's move is automatically triggered in the useEffect hook by checking if it's the computer's turn (turn === 'o').
UI Update:
When there's a winner or a draw, a message is displayed along with a "Play Again" button that triggers the handleRestart function.
