const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(e) {
    const cell = e.target;
    const index = parseInt(cell.dataset.index);

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin()) {
            message.textContent = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            message.textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `It's ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            drawWinningLine(pattern);
            return true;
        }
    }
    return false;
}

function drawWinningLine(pattern) {
    const [a, b, c] = pattern;
    const firstCell = cells[a];
    const lastCell = cells[c];
    const boardRect = board.getBoundingClientRect();
    const firstRect = firstCell.getBoundingClientRect();
    const lastRect = lastCell.getBoundingClientRect();

    const line = document.createElement('div');
    line.classList.add('winning-line');
    board.appendChild(line);

    let x1 = firstRect.left - boardRect.left + firstRect.width / 2;
    let y1 = firstRect.top - boardRect.top + firstRect.height / 2;
    let x2 = lastRect.left - boardRect.left + lastRect.width / 2;
    let y2 = lastRect.top - boardRect.top + lastRect.height / 2;

    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

    const increment = 30;

   
    const xOffset = increment * Math.cos(angle * Math.PI / 180);
    const yOffset = increment * Math.sin(angle * Math.PI / 180);

    line.style.width = `${length + (increment*2)}px`;
    line.style.transformOrigin = '0 0';
    line.style.transform = `translate(${x1 - xOffset}px, ${y1 - yOffset}px) rotate(${angle}deg)`;
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    message.textContent = `It's ${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });

    const winningLine = document.querySelector('.winning-line');
    if (winningLine) {
        winningLine.remove();
    }
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

message.textContent = `It's ${currentPlayer}'s turn`;