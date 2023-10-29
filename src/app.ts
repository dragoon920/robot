const readline = require('readline');
import Robot from './services/robot';
import WarehouseMap from './services/warehouseMap';

const warehouseWidth = 10;
const warehouseHeight = 10;

const robot = new Robot(warehouseWidth, warehouseHeight);
const warehouseMap = new WarehouseMap(warehouseWidth, warehouseHeight, robot);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

warehouseMap.printWarehouseMap();
rl.setPrompt('Enter the next command (N, S, E, W): ');
rl.prompt();

rl.on('line', (input: string) => {
    robot.move(input);
    warehouseMap.printWarehouseMap();
    rl.prompt();
}).on('close', () => {
    console.log('Exiting...');
    process.exit(0);
});
