import WarehouseMap from './warehouseMap';
import Robot from './robot';
import Crate from './crate';
describe('WarehouseMap class', () => {
  test('printWarehouseMap method should display the map with the robot in the correct position', () => {
    const warehouseWidth = 5;
    const warehouseHeight = 5;

    const crates = [new Crate(1,2), new Crate(2,1)];
    const robot = new Robot(warehouseWidth, warehouseHeight, crates);
    const warehouseMap = new WarehouseMap(warehouseWidth, warehouseHeight);
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 
    
    robot.action('N');
    robot.action('E');
    warehouseMap.printWarehouseMap(robot, crates); 

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, '. . * . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, '. * . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, '. & . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, '. . . . .');
    consoleLogSpy.mockRestore(); 
  });

  test('printWarehouseMap method should display the map with the robot and crates in the correct position , after lift and drop crate', () => {
    const warehouseWidth = 5;
    const warehouseHeight = 5;

    let crates = [new Crate(1,2), new Crate(2,1)];
    const robot = new Robot(warehouseWidth, warehouseHeight, crates);
    const warehouseMap = new WarehouseMap(warehouseWidth, warehouseHeight);
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 
    
    robot.action('N');
    robot.action('N');
    robot.action('E');
    robot.action('G'); 
    robot.action('N');
    robot.action('D');
    robot.action('N');
    crates = robot.getCrates();
    warehouseMap.printWarehouseMap(robot, crates); 
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Crate lifted.');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Crate dropped.');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, '. & . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, '. * * . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, '. . . . .');
    consoleLogSpy.mockRestore(); 
  });

  test('printWarehouseMap method should display the map with the robot and crates in the correct position , after lift and drop crate', () => {
    const warehouseWidth = 5;
    const warehouseHeight = 5;

    let crates = [new Crate(1,2), new Crate(2,1)];
    const robot = new Robot(warehouseWidth, warehouseHeight, crates);
    const warehouseMap = new WarehouseMap(warehouseWidth, warehouseHeight);
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 
    
    robot.action('N');
    robot.action('E');
    robot.action('G'); 
    robot.action('N');
    robot.action('D');
    robot.action('N');
    crates = robot.getCrates();
    warehouseMap.printWarehouseMap(robot, crates); 
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'No crate to lift at this position.');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Already empty');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, '. & * . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, '. * . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, '. . . . .');
    consoleLogSpy.mockRestore(); 
  });
});
