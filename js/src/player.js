class Player {
  constructor() {
    this.img = loadImage(
      "img/ddqz4zb-15160fc2-fd15-40ec-94c4-5ccd6b06f214.png"
    );
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
    if (this.y < 0) {
      this.y = 0;
    }

    //display player img
    image(this.img, this.x, this.y);
  }
}
