const readline = require('readline');
import Robot from './services/robot';
import WarehouseMap from './services/warehouseMap';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const warehouseWidth = 10;
const warehouseHeight = 10;

const robot = new Robot(warehouseWidth, warehouseHeight);
const warehouseMap = new WarehouseMap(warehouseWidth, warehouseHeight);

warehouseMap.printWarehouseMap(robot);

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
      warehouseMap.printWarehouseMap(robot);
    }
  }
});