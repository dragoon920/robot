
import Robot from './robot';
import Crate from './crate';

class WarehouseMap {
  warehouseWidth: number;
  warehouseHeight: number;

  constructor(warehouseWidth: number, warehouseHeight:number) {
      this.warehouseWidth = warehouseWidth;
      this.warehouseHeight = warehouseHeight;
  }

  printWarehouseMap(robot: Robot, crates: Crate[]) {

    const warehouseMap: string[][] = [];
    for (let i = 0; i < this.warehouseWidth; i++) {
        warehouseMap.push(new Array(this.warehouseHeight).fill('.'));
    }

    crates.forEach((crate)=>{
      warehouseMap[crate.y][crate.x] = crate.shape;
    })

    warehouseMap[robot.y][robot.x] = robot.shape;
    for (let row of warehouseMap) {
      console.log(row.join(' '));
    }
  }
}

export default WarehouseMap;