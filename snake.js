"uses strict";

export default class Snake {
  #initPosX;
  #initPosY;
  #snakeHead;
  #direction;
  constructor() {
    this.#initPosX = 10;
    this.#initPosY = 10;
    this.#snakeHead = new Array();
    this.#snakeHead.push({ x: this.#initPosX, y: this.#initPosY });
    this.#direction = "right";
  }

  get snakeHead() {
    return this.#snakeHead;
  }

  set snakeHead(value) {
    this.#snakeHead = value;
  }

  get direction() {
    return this.#direction;
  }

  set direction(value) {
    this.#direction = value;
  }

  drawSnake(board, gameBoard) {
    this.#snakeHead.forEach((segment) => {
      const snakeElement = board.createGameElement("div", "snake");
      board.setPosition(snakeElement, segment);
      gameBoard.appendChild(snakeElement);
    });
  }
  move() {
    const head = { ...this.#snakeHead[0] };
    switch (this.#direction) {
      case "right":
        head.x++;
        break;
      case "left":
        head.x--;
        break;
      case "up":
        head.y--;
        break;
      case "down":
        head.y++;
        break;
    }
    this.#snakeHead.unshift(head);
  }
}
