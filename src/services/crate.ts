class Crate {
  x: number;
  y: number;
  shape: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.shape = '*';
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }

}

export default Crate;