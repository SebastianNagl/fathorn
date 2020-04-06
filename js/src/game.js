class Game {
  constructor() {
    console.log("sup");
  }

  init() {
    this.background = new Background();
  }

  display() {
    this.background.display();
  }
}
