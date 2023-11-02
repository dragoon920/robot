const readline = require('readline');
import Robot from './services/robot';
import Crate from './services/crate';
import WarehouseMap from './services/warehouseMap';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const warehouseWidth = 10;
const warehouseHeight = 10;
let crates = [new Crate(4,5), new Crate(8,9)]
const robot = new Robot(warehouseWidth, warehouseHeight, crates);
const warehouseMap = new WarehouseMap(warehouseWidth, warehouseHeight);

warehouseMap.printWarehouseMap(robot, crates);

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'x') {
    process.exit();
  } else {
    console.log('Enter the command (N, S, E, W) for moving: ');
    console.log(`Received input character: ${str}`);
    // Perform any necessary actions based on the input character
    if (str === 'x') {
      console.log('Exiting...');
      process.exit(0);
    } else {
      // Perform other actions based on the input character
      robot.action(str);
      crates = robot.getCrates();
      warehouseMap.printWarehouseMap(robot, crates);
    }
  }
});