class Watch {
  constructor() {
    this.height = 180;
    this.width = 180;
    this.x = width;
    this.y = random(0, height - this.height);
    this.img = loadImage("img/watch.png");
  }
  display() {
    this.x -= 1.5 * game.speed;
    image(this.img, this.x, this.y, 180, 180);
  }
}
