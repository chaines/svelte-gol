import { writable } from "svelte/store";

const DEFAULT_BOARD: boolean[][] = [];

for (let i = 0; i < 100; i++) {
  if (!DEFAULT_BOARD[i]) {
    DEFAULT_BOARD[i] = [];
    for (let j = 0; j < 300; j++) {
      DEFAULT_BOARD[i][j] = false;
    }
  }
}

const { subscribe, set, update } = writable(DEFAULT_BOARD);

const randomizeBoard = () =>
  update((board) => {
    return board.map((row) => {
      return row.map((cell) => {
        return !!Math.floor(Math.floor(Math.random() * 3) / 2);
      });
    });
  });

const toggleCell = (i, j) =>
  update((board) => {
    board[i][j] = !board[i][j];
    return board;
  });

const reset = () => {
  set(DEFAULT_BOARD);
};

export default {
  subscribe,
  randomizeBoard,
  toggleCell,
  reset,
  set,
};
