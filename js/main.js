let game = new Game();

//p5 predef functions
function preload() {
  game.init();
}

function setup() {
  //setting up the canvas for the game and adding it to canvas element of html
  let canvas = createCanvas(1280, 720);
  canvas.parent("canvas");
}

function draw() {
  game.display();
}
