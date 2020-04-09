class Cake {
  constructor() {
    this.height = 100;
    this.width = 100;
    this.x = width;
    this.y = random(0, height - this.height);
    this.img = loadImage("img/cake.png");
  }
  display() {
    this.x -= 3 * game.speed;
    image(this.img, this.x, this.y, 100, 100);
  }
}
