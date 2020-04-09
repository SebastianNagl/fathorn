class Sounds {
  constructor() {
    this.background = loadSound("sounds/raceway.mp3");
    this.playing = false;
    this.drink = loadSound("sounds/drink.mp3");
    this.watch = loadSound("sounds/watch.mp3");
    this.enemy = loadSound("sounds/enemy.mp3");
    this.cake = loadSound("sounds/cake.mp3");
  }

  togglePlaying() {
    if (!this.playing) {
      this.playing = true;
      this.background.loop();
    } else {
      this.playing = false;
      this.background.stop();
    }
  }

  toggleDrink() {
    this.drink.play();
  }

  toggleWatch() {
    this.watch.play();
  }

  toggleEnemy() {
    this.enemy.play();
  }

  toggleCake() {
    this.cake.play();
  }
}
