class Game {
  constructor() {
    this.speed = 1;
    this.hp = 5;
    this.score = 0;
    this.highscore = 0;
    this.enemies = [];
    this.drinks = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.enemy = new Enemy();
    this.sound = new Sounds();
    this.drink = new Drink();
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

    //increase score over time
    if ((frameCount % 50) / game.speed ** 2 === 0) {
      this.score += 1 + Math.floor(this.speed);
      this.speed += 0.05;
    }

    if (this.score > this.highscore) {
      this.highscore = this.score;
    }

    //logic for checking collisions
    let collide = (enemy) => {
      if (
        this.player.x + this.player.width > enemy.x &&
        this.player.x < enemy.x + enemy.width &&
        this.player.y + this.player.height > enemy.y &&
        this.player.y < enemy.y + enemy.height
      ) {
        console.log("boom!");

        //logic to only receive 1 hit
        this.hp--;
        return true;
      }
    };

    //logic for checking good collisions
    let collect = (enemy) => {
      if (
        this.player.x + this.player.width > enemy.x &&
        this.player.x < enemy.x + enemy.width &&
        this.player.y + this.player.height > enemy.y &&
        this.player.y < enemy.y + enemy.height
      ) {
        console.log("boom!");

        //logic to only receive 1 hit
        this.hp++;
        return true;
      }
    };

    this.enemies.forEach((enemy) => {
      collide(enemy);
      enemy.display();
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !collide(enemy);
    });

    this.drinks.forEach((drink) => {
      collect(drink);
      drink.display();
    });

    this.drinks = this.drinks.filter((drink) => {
      return !collect(drink);
    });
  }
}
