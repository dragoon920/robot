const warehouseWidth = 10;
const warehouseHeight = 10;

class Robot {
  constructor() {
      this.x = 0; // initial x-coordinate
      this.y = 0; // initial y-coordinate
      this.shape = '& ';
  }

  move(command) {
      switch (command) {
          case 'N':
              if (this.y < warehouseHeight - 1) {
                  this.y++;
              }
              break;
          case 'S':
              if (this.y > 0) {
                  this.y--;
              }
              break;
          case 'E':
              if (this.x < warehouseWidth - 1) {
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