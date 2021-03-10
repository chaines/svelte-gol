const copyBoard = (board: readonly boolean[][]): boolean[][] => {
  const newBoard = [];
  const height = board.length;
  const width = board[0].length;

  for (let i = 0; i < height; i++) {
    newBoard[i] = [];
    for (let j = 0; j < width; j++) {
      newBoard[i][j] = board[i][j];
    }
  }

  return newBoard;
};

const checkNeighbors = (
  board: readonly boolean[][],
  i: number,
  j: number
): boolean => {
  let neighbors = 0;
  if (board[i - 1]) {
    if (board[i - 1][j - 1]) neighbors++;
    if (board[i - 1][j]) neighbors++;
    if (board[i - 1][j + 1]) neighbors++;
  }
  if (board[i][j - 1]) neighbors++;
  if (board[i][j + 1]) neighbors++;
  if (board[i + 1]) {
    if (board[i + 1][j - 1]) neighbors++;
    if (board[i + 1][j]) neighbors++;
    if (board[i + 1][j + 1]) neighbors++;
  }
  if (board[i][j]) return neighbors === 2 || neighbors === 3;
  else return neighbors === 3;
};

export const gameLoop = (board: readonly boolean[][]): boolean[][] => {
  const newBoard = copyBoard(board);
  const height = board.length;
  const width = board[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      newBoard[i][j] = checkNeighbors(board, i, j);
    }
  }

  return newBoard;
};
