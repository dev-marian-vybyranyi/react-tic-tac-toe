# React Tic-Tac-Toe

A modern, interactive Tic-Tac-Toe game built with React and Vite. This project demonstrates core React concepts like state management, lifting state, component composition, and building clean, maintainable logic.

## 🚀 Features

- **Dynamic Player Names**: Edit player names directly in the game.
- **Interactive Game Board**: Automated symbol switching (X and O) and validation.
- **Winning Detection**: Real-time detection of winners based on winning combinations.
- **Draw Detection**: Handles scenarios where the game ends in a tie.
- **Game Log**: A visual history of all moves made during the game.
- **Game Reset**: Easily restart the game with the "Rematch!" button.
- **Mobile Responsive**: Designed to work on various screen sizes.

## 🛠️ Technologies

- **React**: Core library for building the user interface.
- **Vite**: Fast build tool and dev server.
- **Vanilla CSS**: Custom styles for a premium look and feel.

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository or download the source code.
2. Open your terminal in the project directory.
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open the provided URL in your browser to play the game!

## 🧩 Architectural Highlights

- **State Lifting**: Player names and game turns are managed in `App.jsx` to coordinate between `Player`, `GameBoard`, and `GameOver` components.
- **Derived State**: The game board and the winner are derived from the game turns during rendering, ensuring a single source of truth and avoiding redundant state.
- **Separation of Concerns**: Complex logic is extracted into helper functions (`deriveActivePlayer`, `deriveGameBoard`, `deriveWinner`) for better readability.
- **Mutation Safety**: The state is always updated immutably, ensuring predictable UI behavior.
