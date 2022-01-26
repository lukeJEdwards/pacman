class Vector2 extends p5.Vector {
  constructor(x, y) {
    super(x, y);
  }

  [Symbol.iterator] = function* () {
    yield this.x;
    yield this.y;
  };
}

load_sprites = (filenames) =>
  filenames.map((file) => loadImage(`assets/${file}.png`));

class Pacman {
  constructor(x, y) {
    this.pos = new Vector2(x + 32, y + 32);
    this.size = [32, 32];

    this.speed = 4;
    this.direction = 0;

    this.index = 0;
    this.sprites = load_sprites(["open", "mid", "closed"]);
  }

  get_sprite = () => this.sprites[this.index];
  next = () => (this.index = (this.index + 1) % this.sprites.length);

  move = () => {
    if (keyIsDown(83)) {
      this.pos.y += this.speed;
      this.direction = PI / 2;
    } else if (keyIsDown(87)) {
      this.pos.y -= this.speed;
      this.direction = -PI / 2;
    } else if (keyIsDown(68)) {
      this.pos.x += this.speed;
      this.direction = 0;
    } else if (keyIsDown(65)) {
      this.pos.x -= this.speed;
      this.direction = -PI;
    }
  };

  draw = (dt) => {
    if (dt > 0.15) {
      dt = 0;
      this.next();
    }

    push();
    translate(...this.pos);
    rotate(this.direction);
    imageMode(CENTER);
    image(this.get_sprite(), 0, 0, ...this.size);
    pop();

    return dt;
  };
}
