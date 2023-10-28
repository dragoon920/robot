class WarehouseMap {
  constructor(warehouseWidth, warehouseHeight, robot) {
      this.warehouseWidth = warehouseWidth;
      this.warehouseHeight = warehouseHeight;
      this.robot = robot;
  }

  printWarehouseMap() {
      for (let y = this.warehouseHeight - 1; y >= 0; y--) {
          let row = '';
          for (let x = 0; x < this.warehouseWidth; x++) {
              // If this space has a robot
              if (x === this.robot.x && y === this.robot.y) {
                  row += this.robot.shape;
              } else {
                  row += '_ ';
              }
          }
          console.log(row);
      }
  }
}

module.exports = WarehouseMap;