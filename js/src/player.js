class Player {
  constructor() {
    this.img = loadImage("img/avatar.png");
    this.previousP = [];
    this.imgH = 88;
    this.imgW = 91;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 80;
    this.y = (height - this.height) / 2;
  }

  display() {
    //set limits on y of player
    if (this.y > height - this.height) {
      this.y = height - this.height;
    }
    if (this.x > width - this.width) {
      this.x = width - this.width;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = 0;
    }

    //display player tail
    let vec = createVector(this.x, this.y);
    this.previousP.push(vec);
    for (let i of this.previousP) {
      i.x -= 12;
      fill(color(random(150, 255), random(0, 50), random(0, 50)));
      square(i.x + this.width / 3, i.y + 11, 10, 7);
      fill(color(random(100, 255), random(50, 150), random(0, 30)));
      square(i.x + this.width / 3, i.y + 18, 10, 7);
      fill(color(random(150, 200), random(100, 255), random(0, 50)));
      square(i.x + this.width / 3, i.y + 25, 10, 7);
      fill(color(random(0, 100), random(200, 255), random(0, 100)));
      square(i.x + this.width / 3, i.y + 32, 10, 7);
      fill(color(random(0, 50), random(100, 200), random(200, 255)));
      square(i.x + this.width / 3, i.y + 39, 10, 7);
      fill(color(random(0, 50), random(0, 50), random(200, 255)));
      square(i.x + this.width / 3, i.y + 46, 10, 7);
      fill(color(random(100, 200), random(0, 50), random(150, 255)));
      square(i.x + this.width / 3, i.y + 53, 10, 7);
    }
    if (this.previousP.length > 60) {
      this.previousP.splice(0, 1);
    }

    //display player img
    image(this.img, this.x, this.y, this.imgH, this.imgW);
  }
}
