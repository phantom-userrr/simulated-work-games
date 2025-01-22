🔴🟡 Connect 4 Game Adventure

Welcome to Kalvian’s Connect 4, the classic strategy game where your goal is to outsmart your opponent by connecting four discs in a row! With smooth gameplay and a sleek design, get ready to unleash your inner strategist. Let’s drop into the fun! 🔴🟡🎮

✨ Features
	•	🕹️ Interactive Gameplay: Player vs. Player or Player vs. AI options.
	•	🔄 Dynamic Grid System: Real-time updates as discs are dropped into columns.
	•	🎨 Clean Design: Minimalistic and visually engaging board.
	•	💡 Win Detection: Automatic detection of horizontal, vertical, and diagonal wins.
	•	🔁 Restart Game: Reset the board anytime with a single click.
	•	🔊 Sound Effects (optional): Enjoy satisfying feedback as you play.

🚀 Getting Started

Prerequisites

All you need is a modern web browser. No additional dependencies required! 🌐

📥 Installation
	1.	Clone the repository:

git clone https://github.com/phantom-userrr/connect-4-game.git


	2.	Open index.html in your browser and start connecting! 🔴🟡

📁 Project Structure

connect-4/
├── index.html   # HTML structure
├── styles.css   # Game styling
└── script.js    # Game logic and interactivity

🎯 How to Play
	1.	Objective: Be the first to connect four of your discs in a row (horizontally, vertically, or diagonally).
	2.	Player Turns:
	•	🔴 Player 1: Red discs.
	•	🟡 Player 2 / AI: Yellow discs.
	3.	Controls:
	•	Click on a column to drop your disc.
	•	The game alternates turns automatically.
	4.	Winning or Draw:
	•	Win: Connect four discs in any direction.
	•	Draw: Board fills up with no winner.

⚙️ Game Mechanics

Key Logic:
	•	Column Selection: Click-based input to drop discs in the lowest available slot in the selected column.
	•	Win Detection: Checks for four consecutive discs of the same color horizontally, vertically, and diagonally.
	•	AI Logic (Optional):
	•	Simple AI logic can block potential wins or attempt to create its own.

JavaScript Highlights:
	•	Core Functions:
	•	addEventListener for click-based player inputs.
	•	nested loops to check for win conditions.
	•	Dynamic DOM updates to reflect game state.
	•	Drop Disc Logic:

function dropDisc(column) {
    for (let row = rows - 1; row >= 0; row--) {
        if (!board[row][column]) {
            board[row][column] = currentPlayer;
            updateBoard(row, column);
            checkWin(row, column);
            switchPlayer();
            break;
        }
    }
}


	•	Win Detection:

function checkWin(row, column) {
    if (checkDirection(row, column, 0, 1) ||  // Horizontal
        checkDirection(row, column, 1, 0) ||  // Vertical
        checkDirection(row, column, 1, 1) ||  // Diagonal Right
        checkDirection(row, column, 1, -1)) { // Diagonal Left
        endGame(currentPlayer);
    }
}


	•	Restart Game:

function resetBoard() {
    board = createEmptyBoard();
    renderBoard();
    currentPlayer = 'red';
}

🎨 Customization

Update Gameplay in script.js:
	•	Adjust board size:

const rows = 6;  // Default: 6 rows
const columns = 7; // Default: 7 columns


	•	Modify AI difficulty by tweaking decision-making logic.

Change Styling in styles.css:
	•	Customize colors:

:root {
    --player1-color: #ff0000; /* Red */
    --player2-color: #ffff00; /* Yellow */
    --board-color: #0033cc; /* Blue */
}

🌐 Browser Support
	•	Chrome (latest) 🎯
	•	Firefox (latest) 🦊
	•	Safari (latest) 🧭
	•	Edge (latest) 🌊

🚀 Future Enhancements
	•	Add multiplayer online mode 🌐
	•	Improve AI with smarter algorithms 🧠
	•	Introduce animations for disc drops 🎥
	•	Include power-ups or obstacles 🎮
	•	Add a high score leaderboard 🏆

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author

Sajit 🔴🟡
GitHub: @phantom-userrr

💖 Support

Loved the game? Drop a ⭐️ on the repository and share it with fellow Connect 4 enthusiasts!

Made with ❤️ and a lot of logic 🤓
