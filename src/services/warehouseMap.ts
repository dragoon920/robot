
import Robot from './robot';

class WarehouseMap {
  warehouseWidth: number;
  warehouseHeight: number;
  robot:Robot;

  constructor(warehouseWidth: number, warehouseHeight:number, robot:Robot) {
      this.warehouseWidth = warehouseWidth;
      this.warehouseHeight = warehouseHeight;
      this.robot = robot;
  }

  printWarehouseMap() {

    const warehouseMap: string[][] = [];
    for (let i = 0; i < this.warehouseWidth; i++) {
        warehouseMap.push(new Array(this.warehouseHeight).fill('.'));
    }
    warehouseMap[this.robot.y][this.robot.x] = this.robot.shape;
    for (let row of warehouseMap) {
      console.log(row.join(' '));
    }
  }
}

export default WarehouseMap;