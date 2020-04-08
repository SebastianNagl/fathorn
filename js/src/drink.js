class Drink {
  constructor() {
    this.height = 80;
    this.width = 80;
    this.x = width;
    this.y = random(0, height - this.height);
    this.img = loadImage("img/drink.png");
  }
  display() {
    this.x -= 3 * game.speed;
    image(this.img, this.x, this.y, 80, 80);
  }
}
