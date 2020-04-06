class Background {
  constructor() {
    this.img = { src: loadImage("img/sky.png"), x: 0 };
  }

  display() {
    image(this.img.src, this.img.x, 0);
    image(this.img.src, this.img.x + width, 0);

    this.img.x -= 4;

    if (this.img.x <= -width) {
      this.img.x = 0;
    }
  }
}
