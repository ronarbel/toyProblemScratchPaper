const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// state

let player = 'X';

let playableMoves = 9;

let board = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
];

// utils
const printBoard = () => {
  console.log(board[0][0], '|', board[0][1], '|', board[0][2]);
  console.log('----------');
  console.log(board[1][0], '|', board[1][1], '|', board[1][2]);
  console.log('----------');
  console.log(board[2][0], '|', board[2][1], '|', board[2][2]);
};

const switchPlayer = () => {
  player = player === 'X' ? 'O' : 'X';
};

const playMove = (move) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === move) {
        board[i][j] = player.slice();
        playableMoves -= 1;
        switchPlayer();
      }
    }
  }
};

const checkWin = () => {
  const checkRow = () => {
    for (let i = 0; i < board.length; i += 1) {
      let row = board[i].toString();
      if (row === 'X,X,X' || row === 'O,O,O') return true;
    }
    return false;
  };

  const checkCol = () => {
    for (let i = 0; i < board.length; i += 1) {
      let col = [board[0][i], board[1][i], board[2][i]].toString();
      if (col === 'X,X,X' || col === 'O,O,O') return true;
    }
    return false;
  };

  const checkDiag = () => {
    let majDiag = [board[0][0], board[1][1], board[2][2]].toString();
    let minDiag = [board[2][0], board[1][1], board[0][2]].toString();

    if (majDiag === 'X,X,X' || majDiag === 'O,O,O') return true;
    if (minDiag === 'X,X,X' || minDiag === 'O,O,O') return true;

    return false;
  };

  return checkRow() || checkCol() || checkDiag();
};

const endWinGame = () => {
  printBoard();
  switchPlayer();
  console.log(`Game over! ${player} wins!`);
  rl.close();
};

const endTieGame = () => {
  printBoard();
  console.log('Tie game!');
  rl.close();
};

const playCompMove = () => {
  const prevPlayableMoves = playableMoves;

  const compMove = Math.floor(Math.random() * 9).toString();
  playMove(compMove);

  if (prevPlayableMoves === playableMoves) {
    playCompMove();
  }
};


const promptPlayer = () => {
  printBoard();
  rl.question(`${player}'s turn. Choose a number: `, (input) => {
    playMove(input);

    if (checkWin()) {
      endWinGame();
    } else if (!playableMoves) {
      endTieGame();
    } else {
      playCompMove();
      if (checkWin()) {
        endWinGame();
      } else if (!playableMoves) {
        endTieGame();
      } else {
        promptPlayer();
      }
    }
  });
};

// initiate game
promptPlayer();


/*
define rl.question
log input
move into promptPlayer >> initiate game
print board
create state >> player, availableMoves, board (strings)
playMove
switchPlayer
checkWin >> return false
endWinGame
endTieGame
verbose checkWin
playCompMove
promptPlayer logic update.
*/
