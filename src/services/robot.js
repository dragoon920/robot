
class Robot {
  constructor(warehouseWidth, warehouseHeight) {
      this.x = 0; // initial x-coordinate
      this.y = 0; // initial y-coordinate
      this.shape = '& ';
      this.warehouseWidth = warehouseWidth;
      this.warehouseHeight = warehouseHeight;
  }

  move(command) {
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

module.exports = Robot;