class Enemy {
  constructor() {
    this.height = 80;
    this.width = 80;
    this.x = width;
    this.y = random(0, height - this.height);
    this.img = loadImage("img/skull.png");
  }
  display() {
    // console.log("disply gets called");
    this.x -= 3 * game.speed;
    image(this.img, this.x, this.y, 80, 80);
  }
}
