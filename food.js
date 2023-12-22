"uses strict";

export default class Food {
  #x;
  #y;
  constructor(board) {
    this.#x = Math.floor(Math.random() * board.gridSize) + 1;
    this.#y = Math.floor(Math.random() * board.gridSize) + 1;
  }

  get x() {
    return this.#x;
  }
  get y() {
    return this.#y;
  }
  set x(value) {
    this.#x = value;
  }
  set y(value) {
    this.#y = value;
  }
  drawFood(board, gameBoard) {
    const foodElement = board.createGameElement("div", "food");
    board.setPosition(foodElement, { x: this.#x, y: this.#y });
    gameBoard.appendChild(foodElement);
  }
}
