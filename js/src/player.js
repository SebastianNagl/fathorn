class Player {
  constructor() {
    this.img = loadImage(
      "img/ddqz4zb-15160fc2-fd15-40ec-94c4-5ccd6b06f214.png"
    );
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 70;
    this.y = (height - this.height) / 2;
  }

  display() {
    if (this.y > height - this.height) {
      this.y = height - this.height;
    }
    image(this.img, this.x, this.y);
  }
}
