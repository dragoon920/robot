
class Robot {
  x: number;
  y: number;
  shape: string;
  warehouseWidth: number;
  warehouseHeight: number;

  constructor(warehouseWidth: number, warehouseHeight: number) {
      this.x = 0; // initial x-coordinate
      this.y = 0; // initial y-coordinate
      this.shape = '& ';
      this.warehouseWidth = warehouseWidth;
      this.warehouseHeight = warehouseHeight;
  }

  move(command : string) {
      switch (command) {
          case 'N':
              if (this.y < this.warehouseHeight - 1) {
                  this.y++;
              }
              break;
          case 'S':
              if (this.y > 0) {
                  this.y--;
              }
              break;
          case 'E':
              if (this.x < this.warehouseWidth - 1) {
                  this.x++;
              }
              break;
          case 'W':
              if (this.x > 0) {
                  this.x--;
              }
              break;
          default:
              console.log("Invalid command");
      }
  }

  getPosition() {
      return `(${this.x},${this.y})`;
  }
}

export default Robot;