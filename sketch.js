let dt = 0;
let pacman = null;

const FPS = 60;

function preload() {
  pacman = new Pacman(windowWidth / 2, windowHeight / 2);
}

function setup() {
  createCanvas(32 * 30, 32 * 20);
}

function draw() {
  frameRate(FPS);
  dt += 1 / FPS;

  background(0);

  pacman.move();
  dt = pacman.draw(dt);
}
