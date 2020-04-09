class Game {
  constructor() {
    this.speed = 1;
    this.hp = 5;
    this.score = 0;
    this.highscore = 0;
    this.enemies = [];
    this.drinks = [];
    this.watches = [];
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
      console.log(this.speed);
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
          //TO DO: logic to only receive 1 hit
          this.hp--;
        } else if (string === "drink") {
          this.hp++;
        } else if (string === "watch") {
          this.speed--;
          console.log("picked up watch");
        }
        return true;
      }
    };

    this.enemies.forEach((enemy) => {
      collide(enemy, "enemy");
      enemy.display();
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !collide(enemy, "enemy");
    });

    this.drinks.forEach((drink) => {
      collide(drink, "drink");
      drink.display();
    });

    this.drinks = this.drinks.filter((drink) => {
      return !collide(drink, "drink");
    });

    this.watches.forEach((watch) => {
      collide(watch, "watch");
      watch.display();
    });

    this.watches = this.watches.filter((watch) => {
      return !collide(watch, "watch");
    });
  }
}
