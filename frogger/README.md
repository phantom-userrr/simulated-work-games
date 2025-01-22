# 🐸 Frogger Game Adventure

Welcome to **Kalvian's Frogger Game**, where your reflexes and timing will be put to the test! This classic grid-based game challenges you to guide your frog safely across roads, rivers, and obstacles to reach the goal. Let’s hop into the fun! 🐸🎮

---

## ✨ Features

- 🚗 **Road & River Obstacles**: Dodge cars, navigate logs, and avoid falling into the water.
- ⏱️ **Time Limit**: Reach the goal within 20 seconds.
- 🕹️ **Dynamic Movement**: Player movement with keyboard controls.
- 🔄 **Real-Time Interactions**: Logs move dynamically, and you’ll float along with them when safe.
- 🛑 **Pause and Resume**: Control the game’s pace with a toggle button.
- 🎨 **Simple Grid Design**: Clean, retro aesthetic for an engaging experience.

---

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser. No additional dependencies required! 🌐

### 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/phantom-userrr/frogger-game.git
   ```

2. Open `index.html` in your browser and start hopping! 🐸

---

## 📁 Project Structure

```plaintext
frogger-game/
├── index.html   # HTML structure
├── styles.css   # Game styling
└── script.js    # Game logic and interactivity
```

---

## 🎯 How to Play

1. **Objective**: Start on the blue block and reach the red block within 20 seconds to win the game.
2. **Lose Conditions**:
   - Time runs out ⏳
   - Hit by a car 🚗
   - Fall into the river 🌊
3. **Safe Zones**:
   - Roads (`.c2`, `.c3`)
   - Logs (`.l1`, `.l2`, `.l3`) — but remember, logs move!
4. **Controls**:
   - Use **arrow keys** to move up, down, left, and right ⬆️⬇️⬅️➡️.
   - Press the **start button** to begin or pause the game.

---

## ⚙️ Game Mechanics

### Key Logic:

- **Grid-based movement**: The player moves block by block on a predefined grid.
- **Dynamic interactions**: Logs move, and the player moves with them when standing on top.
- **Obstacle detection**:
  - Cars (`.c1`) cause the player to lose on collision.
  - Certain river blocks (`.l4`, `.l5`, `.lf2`, `.lf3`) result in falling into the water.

### JavaScript Highlights:

- **Core Functions**:
  - `switch` and `cases` for handling game states.
  - `addEventListener` and `removeEventListener` for player controls.
  - `setInterval` and `clearInterval` for obstacle animations and timing.

- **Player Movement**:
  ```javascript
  document.addEventListener('keydown', (e) => {
      switch (e.key) {
          case 'ArrowUp':
              moveUp();
              break;
          case 'ArrowDown':
              moveDown();
              break;
          case 'ArrowLeft':
              moveLeft();
              break;
          case 'ArrowRight':
              moveRight();
              break;
      }
  });
  ```

- **Game Timing**:
  ```javascript
  let timer = setInterval(() => {
      if (timeLeft > 0) {
          timeLeft--;
      } else {
          endGame('lose');
      }
  }, 1000);
  ```

---

## 🎨 Customization

### Update Gameplay in `script.js`:
- Adjust **time limit**:
  ```javascript
  const timeLimit = 20; // Default: 20 seconds
  ```
- Change **grid size** or **obstacle positions** by modifying the grid setup.

### Change Styling in `styles.css`:
- Customize colors:
  ```css
  :root {
      --safe-zone: #00ff00; /* Green */
      --danger-zone: #ff0000; /* Red */
      --river: #0000ff; /* Blue */
  }
  ```

---

## 🌐 Browser Support

- Chrome (latest) 🎯
- Firefox (latest) 🦊
- Safari (latest) 🧭
- Edge (latest) 🌊

---

## 🚀 Future Enhancements

- [ ] Add sound effects 🔊
- [ ] Implement multiple levels 📈
- [ ] Introduce power-ups 🛡️
- [ ] Add a high score leaderboard 🏆
- [ ] Enhance animations with CSS transitions 🎥

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

Sajit 🐸
GitHub: [@phantom-userrr](https://github.com/phantom-userrr)

---

## 💖 Support

Found the project fun and helpful? Drop a ⭐️ and share it with fellow game enthusiasts!

Made with 💚 and a lot of `debugging` 😄
