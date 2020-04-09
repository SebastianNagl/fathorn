class Game {
  constructor() {
    this.highscore = 0;
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.enemy = new Enemy();
    this.sound = new Sounds();
    this.drink = new Drink();
    this.watch = new Watch();
  }

  setup() {
    this.player.setup();
    this.score = 0;
    this.hp = 5;
    this.speed = 1;
    this.enemies = [];
    this.drinks = [];
    this.watches = [];
    this.player.previousP = [];
  }

  display() {
    this.background.display();
    this.player.display();

    if (frameCount % 90 === 0) {
      this.enemies.push(new Enemy());
    }

    if (frameCount % 1000 === 0) {
      this.drinks.push(new Drink());
    }

    if (frameCount % 3000 === 0) {
      this.watches.push(new Watch());
    }

    //increase score over time
    if ((frameCount % 50) / game.speed ** 2 === 0) {
      this.score += 1 + Math.floor(this.speed);
      this.speed += 0.05;
    }

    if (this.score > this.highscore) {
      this.highscore = this.score;
    }

    //logic for checking collisions
    let collide = (enemy, string) => {
      if (
        this.player.x + this.player.width > enemy.x + 30 &&
        this.player.x < enemy.x - 30 + enemy.width &&
        this.player.y + this.player.height > enemy.y + 30 &&
        this.player.y < enemy.y - 30 + enemy.height
      ) {
        if (string === "enemy") {
          this.hp--;
          this.sound.toggleEnemy();
        } else if (string === "drink") {
          this.hp++;
          this.sound.toggleDrink();
        } else if (string === "watch") {
          this.speed--;
          this.sound.toggleWatch();
        }
        return true;
      }
    };

    //display stuff and check collisions
    this.enemies = this.enemies.filter((enemy) => {
      enemy.display();
      return !collide(enemy, "enemy");
    });
    this.drinks = this.drinks.filter((drink) => {
      drink.display();
      return !collide(drink, "drink");
    });
    this.watches = this.watches.filter((watch) => {
      watch.display();
      return !collide(watch, "watch");
    });
  }
}
