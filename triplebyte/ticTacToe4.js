const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// state

let player = 'X';

let availableMoves = 9;

let board = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
];

let win = false;

// utils
const printBoard = () => {
  console.log(board[0][0], '|', board[0][1], '|', board[0][2]);
  console.log('----------');
  console.log(board[1][0], '|', board[1][1], '|', board[1][2]);
  console.log('----------');
  console.log(board[2][0], '|', board[2][1], '|', board[2][2]);
};

const swapPlayer = () => {
  player = player === 'X' ? 'O' : 'X';
};

const playMove = (move) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === move) {
        board[i][j] = player.slice();
        availableMoves -= 1;
        swapPlayer();
      }
    }
  }
};

const endGame = () => {
  printBoard();
  swapPlayer();
  console.log(`Game over! ${player} wins!`);
  rl.close();
};

const checkWin = () => {
  const checkRow = () => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i].toString() === 'X,X,X' || board[i].toString() === 'O,O,O') return true;
    }

    return false;
  };

  const checkCol = () => {
    for (let i = 0; i < board.length; i += 1) {
      const col = [board[0][i], board[1][i], board[2][i]].toString();
      if (col === 'X,X,X' || col === 'O,O,O') return true;
    }

    return false;
  };

  const checkDiag = () => {
    const majDiag = [board[0][0], board[1][1], board[2][2]].toString();
    const minDiag = [board[2][0], board[1][1], board[0][2]].toString();

    if (majDiag === 'X,X,X' || majDiag === 'O,O,O') return true;
    if (minDiag === 'X,X,X' || minDiag === 'O,O,O') return true;

    return false;
  };

  return checkRow() || checkCol() || checkDiag();
};

const endTieGame = () => {
  printBoard();
  console.log('Tie game!');
  rl.close();
};

const playRandomMove = () => {
  let prevAvailableMoves = availableMoves;
  let move = Math.floor(Math.random() * 9).toString();
  playMove(move);

  if (prevAvailableMoves === availableMoves) {
    playRandomMove();
  }
};

const promptPlayer = () => {
  printBoard();
  rl.question(`${player}'s turn. Choose a number: `, (input) => {
    // player move
    playMove(input);
    if (checkWin()) {
      endGame();
    } else if (!availableMoves) {
      endTieGame();
    } else {
      // comp move
      playRandomMove();
      if (checkWin()) {
        endGame();
      } else if (!availableMoves) {
        endTieGame();
      } else {
        promptPlayer();
      }
    }
  });
};

// initiate game
promptPlayer();
