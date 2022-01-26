let dt = 0;
let score = 0;
let grid;

const FPS = 60;
const SIZE = 25;

function preload() {}

function setup() {
  createCanvas(18 * SIZE, 21 * SIZE);
  let btn = createButton("save");
  btn.position(500, 100);
  btn.mousePressed(save_grid);

  noStroke();
  rectMode(CENTER);

  grid = new Grid(width / SIZE + 1, height / SIZE + 1);
  setup_grid();
}

function draw() {
  frameRate(FPS);
  dt += 1 / FPS;

  background(0);
  grid.draw();
}

function mouseClicked() {
  for (let i = 0; i < grid.cols; i++) {
    for (let j = 0; j < grid.rows; j++) {
      let cell = grid.grid[i][j];
      if (mouseX >= cell.pos.x - SIZE / 2 && mouseX <= cell.pos.x + SIZE / 2) {
        if (
          mouseY >= cell.pos.y - SIZE / 2 &&
          mouseY <= cell.pos.y + SIZE / 2
        ) {
          grid.grid[i][j].wall = !grid.grid[i][j].wall;
        }
      }
    }
  }
}

function save_grid() {
  saveJSON(grid.grid, "grid.json");
}

function setup_grid() {
  for (let i = 0; i < grid.rows; i++) {
    grid.grid[0][i].wall = true;
    grid.grid[grid.cols - 1][i].wall = true;
  }
  for (let i = 0; i < grid.cols; i++) {
    grid.grid[i][0].wall = true;
    grid.grid[i][grid.rows - 1].wall = true;
  }
}
