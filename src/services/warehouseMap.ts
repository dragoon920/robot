
import Robot from './robot';

class WarehouseMap {
  warehouseWidth: number;
  warehouseHeight: number;

  constructor(warehouseWidth: number, warehouseHeight:number) {
      this.warehouseWidth = warehouseWidth;
      this.warehouseHeight = warehouseHeight;
  }

  printWarehouseMap(robot: Robot) {

    const warehouseMap: string[][] = [];
    for (let i = 0; i < this.warehouseWidth; i++) {
        warehouseMap.push(new Array(this.warehouseHeight).fill('.'));
    }

    warehouseMap[robot.y][robot.x] = robot.shape;
    for (let row of warehouseMap) {
      console.log(row.join(' '));
    }
  }
}

export default WarehouseMap;