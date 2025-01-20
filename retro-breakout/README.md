# 🕹️ Retro Breakout Game

A minimalist, retro-styled implementation of the classic Breakout arcade game using vanilla JavaScript, HTML, and CSS. The game features a clean, terminal-inspired design with subtle CRT effects. 👾

## ✨ Features

- 🎮 Classic arcade gameplay
- 💻 Minimalist retro design with CRT screen effect
- 📱 Responsive layout
- 🎲 Randomized ball direction
- 📈 Progressive difficulty with multiple block rows
- 🏆 Score tracking
- 🖥️ Terminal-inspired green-on-black color scheme

## 🚀 Getting Started

### Prerequisites

No dependencies required! Just a modern web browser. 🌐

### 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/phantom-userrr/retro-breakout.git
```

2. Open `index.html` in your web browser

Or simply download the three files (`index.html`, `styles.css`, `script.js`) and open `index.html` in your browser.

### 📁 Project Structure

```
retro-breakout/
├── index.html
├── styles.css
└── script.js
```

## 🎯 How to Play

1. Use the **left** and **right** arrow keys to move the paddle ⬅️ ➡️
2. Prevent the ball from falling below the paddle 🏓
3. Break all the blocks to win 💥
4. If the ball falls below the paddle, the game is over 💔

## 🎮 Game Controls

- `←` (Left Arrow): Move paddle left
- `→` (Right Arrow): Move paddle right

## ⚙️ Game Mechanics

- 🚄 The ball speeds up slightly over time
- 🎲 Ball direction is randomized at the start
- 💫 Blocks are removed when hit
- 📊 Score increases with each block destroyed
- 🏁 Game ends when all blocks are destroyed or ball falls below paddle

## 🔧 Technical Details

### Game Configuration

```javascript
// Board dimensions
boardWidth = 560
boardHeight = 300

// Block layout
Rows = 4
Blocks per row = 6

// Speed
Ball speed = 2.5
Update interval = 25ms
```

### Classes and Objects

- `Block` class: Handles block creation and collision detection
- Ball object: Manages ball movement and direction
- Paddle object: Handles user input and movement

## 🎨 Customization

You can easily customize the game by modifying these values in the code:

### In script.js
```javascript
const blockWidth = 100;  // Block width
const blockHeight = 20;  // Block height
const ballDiameter = 20; // Ball size
```

### In styles.css
```css
:root {
  /* Change the color scheme */
  --game-color: #33ff33;  /* Default green */
}
```

## 🌐 Browser Support

- Chrome (latest) 🎯
- Firefox (latest) 🦊
- Safari (latest) 🧭
- Edge (latest) 🌊

## 🤝 Contributing

1. Fork the repository 🍴
2. Create your feature branch (`git checkout -b feature/AmazingFeature`) 🌿
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`) ✨
4. Push to the branch (`git push origin feature/AmazingFeature`) 🚀
5. Open a Pull Request 📬

## 🚀 Possible Enhancements

- [ ] Add sound effects 🔊
- [ ] Implement multiple levels 📈
- [ ] Add power-ups ⚡
- [ ] Add high score system 🏆
- [ ] Add different block patterns 🎨
- [ ] Implement different ball speeds 🏃
- [ ] Add mobile touch controls 📱

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- 🕹️ Inspired by the original Breakout game by Atari (1976)
- 💻 Built with vanilla JavaScript
- 🖥️ Retro styling inspired by classic terminal interfaces

## 👨‍💻 Author

Sajit Magesh
- GitHub: [@maverickOG](https://github.com/maverickOG) 🐙

## 💖 Support

If you found this project helpful, please give it a ⭐️!

---
Made with 💚 and lots of `console.log()` 😄
