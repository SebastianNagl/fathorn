class Enemy {
  constructor() {
    this.height = 30;
    this.width = 30;
    this.x = width;
    this.y = random(0, height - this.height);
    this.img = loadImage("img/skull.png");
  }
  display() {
    // console.log("disply gets called");
    this.x--;
    image(this.img, this.x, this.y, 50, 50);
  }
}
