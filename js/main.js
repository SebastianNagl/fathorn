let game = new Game();
let hp = 5;
let score = 0;
let playing = true;

//p5 predef functions
function preload() {
  game.init();
}

function setup() {
  //setting up the canvas for the game and adding it to canvas element of html
  let canvas = createCanvas(1024, 576);
  canvas.parent("canvas");

  game.setup();
}

function draw() {
  if (playing) {
    clear();

    //show elements of canvas
    game.display();

    //movement on key presses
    if (keyIsDown(DOWN_ARROW)) {
      game.player.y += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      game.player.y -= 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      game.player.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      game.player.x += 5;
    }

    //increase score over time
    if (frameCount % 50 === 0) {
      score++;
    }

    //update score and hp
    document.getElementById("score").innerHTML = score;
    document.getElementById("hp").innerHTML = hp;
  }
}
