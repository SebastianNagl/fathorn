class Sounds {
  constructor() {
    this.background = loadSound("sounds/raceway.mp3");
    this.playing = false;
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
}
