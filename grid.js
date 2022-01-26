class Cell {
  constructor(x, y) {
    this.pos = new Vector2(x, y);
    this.wall = false;
    this.pac_dot = true;
    this.power_pallet = false;
    this.time = 0;
  }

  draw = (dt = 0) => {
    this.time += dt;
    if (this.wall) {
      fill(150, 100);
      rect(...this.pos, SIZE, SIZE);
      this.pac_dot = false;
    } else if (this.pac_dot) {
      fill(255);
      ellipse(...this.pos, SIZE / 4);
    }
  };
}

class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = [];

    for (let i = 0; i < cols; i++) {
      this.grid[i] = [];
      for (let j = 0; j < rows; j++) {
        this.grid[i][j] = new Cell(SIZE * j, SIZE * i);
      }
    }
  }

  draw = () => this.grid.forEach((row) => row.forEach((cell) => cell.draw()));
}
