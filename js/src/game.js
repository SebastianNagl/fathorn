class Game {
  constructor() {
    console.log("sup");
  }

  init() {
    this.background = new Background();
    this.player = new Player();
  }

  setup() {
    this.player.setup();
  }

  display() {
    this.background.display();
    this.player.display();
  }
}
