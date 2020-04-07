class Game {
  constructor() {
    this.enemies = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.enemy = new Enemy();
  }

  setup() {
    this.player.setup();
  }

  display() {
    this.background.display();
    this.player.display();

    if (frameCount % 120 === 0) {
      this.enemies.push(new Enemy());
    }

    //logic for checking collisions
    let collide = (enemy) => {
      if (
        this.player.x + this.player.width > enemy.x &&
        this.player.x < enemy.x + enemy.width &&
        this.player.y + this.player.height > enemy.y &&
        this.player.y < enemy.y + enemy.height
      ) {
        //logic to punish player
        console.log("collision bra!");
      }
    };

    this.enemies.forEach((enemy) => {
      collide(enemy);
      enemy.display();
    });
  }
}
