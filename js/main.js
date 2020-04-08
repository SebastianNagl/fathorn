let game = new Game();
let playing = false;

//p5 predef functions
function preload() {
  game.init();
  imgN = loadImage("img/fathorn.png");
  // song = loadSound("sounds/raceway.mp3", function () {
  //   console.log("loaded music!");
  // });
}

function setup() {
  //setting up the canvas for the game and adding it to canvas element of html
  let canvas = createCanvas(1024, 576);
  canvas.parent("canvas");
  game.setup();
}

function draw() {
  //screen when new / game over
  if (!playing) {
    document.getElementById("game").style.visibility = "hidden";
    image(imgN, 0, 0);
  }

  //game on
  if (playing) {
    document.getElementById("game").style.visibility = "visible";
    clear();

    //show elements of canvas
    game.display();

    //movement on key presses
    if (keyIsDown(DOWN_ARROW)) {
      game.player.y += 8;
    }
    if (keyIsDown(UP_ARROW)) {
      game.player.y -= 8;
    }
    if (keyIsDown(LEFT_ARROW)) {
      game.player.x -= 8;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      game.player.x += 8;
    }

    //update score hp highscore
    document.getElementById("score").innerHTML = game.score;
    document.getElementById("hp").innerHTML = game.hp;
    document.getElementById("highscore").innerHTML = game.highscore;
  }

  //check for game over
  if (game.hp <= 0) {
    playing = false;
    game.sound.togglePlaying();
    game.setup();
  }
}

function keyPressed() {
  if (keyCode === 13) {
    //music on
    if (!game.sound.playing) {
      game.sound.togglePlaying();
    }
    //game on
    playing = true;
  }
}
