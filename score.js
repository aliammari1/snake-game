export default class Score {
  #currentScore;
  #highScore;
  #score;
  #highScoreText;
  constructor(snakeLength = 1) {
    this.#currentScore = snakeLength - 1;
    this.#highScore = 0;
    this.#score = document.getElementById("score");
    this.#highScoreText = document.getElementById("highScore");
  }

  updateScore(snakeLength) {
    this.#currentScore = snakeLength - 1;
    this.#score.textContent = this.#currentScore.toString().padStart(3, "0");
  }

  updateHighScore() {
    if (this.#currentScore > this.#highScore) {
      this.#highScore = this.#currentScore;
      this.#highScoreText.textContent = this.#highScore
        .toString()
        .padStart(3, "0");
    }
    this.#highScoreText.style.display = "block";
  }
}
