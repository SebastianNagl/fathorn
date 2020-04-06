class Background {
  constructor() {
    this.img = loadImage("img/sky.png");
  }

  display() {
    image(this.img, 0, 0);
  }
}
