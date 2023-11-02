class Crate {
  x: number;
  y: number;
  shape: string;
  isLifted: boolean;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.shape = '*';
    this.isLifted = false;
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }

}

export default Crate;