let board = require('./board.js');
const instructions = 'PlayingTopLeft: npm run TL,\nPlayingTopRight: npm run TR,\nPlayingTopCenter: npm run TC,\nPlayingMiddleCenter: npm run MC,\nPlayingBottomLeft: npm run BL,\nETC: ...............'
console.log(instructions);
let input = process.argv[2];
let letter = true;
let move;
if(letter === true) {
  move = 'X';
} else {
  move = 'O';
}
letter = !letter;

let coords = process.argv[3];
let exportedCoords = coords.split('');
let withType = exportedCoords.push(move);

if(input === 'TL' && board [0][0] === ' ') {
  board[0][0] = move;
} else if(input === 'TC' && board [0][1] === ' ') {
  board[0][1] = move;
} else if(input === 'TR' && board [0][2] === ' ') {
  board[0][2] = move;
} else if(input === 'ML' && board [1][0] === ' ') {
  board[1][0] = move;
} else if(input === 'MC' && board [1][1] === ' ') {
  board[1][1] = move;
} else if(input === 'MR' && board [1][2] === ' ') {
  board[1][2] = move;
} else if(input === 'BL' && board [2][0] === ' ') {
  board[2][0] = move;
} else if(input === 'BC' && board [2][1] === ' ') {
  board[2][1] = move;
} else if(input === 'BR' && board [2][2] === ' ') {
  board[2][2] = move;
} else {
  console.log('----------NOT A VALID MOVE----------');
}

let displayBoard = 
`_____________\n
${board[0][0]} |  ${board[0][1]} |  ${board[0][2]}
\n_____________\n
${board[1][0]} |  ${board[1][1]} |  ${board[1][2]}
\n_____________\n
${board[2][0]} |  ${board[2][1]} |  ${board[2][2]}
\n_____________\n`



console.log(displayBoard);
module.exports = exportedCoords;