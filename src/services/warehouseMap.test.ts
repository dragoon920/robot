import WarehouseMap from './warehouseMap';
import Robot from './robot';

describe('WarehouseMap class', () => {
  test('printWarehouseMap method should display the map with the robot in the correct position', () => {
    const warehouseWidth = 5;
    const warehouseHeight = 5;
    const robot = new Robot(warehouseWidth, warehouseHeight);
    
    const warehouseMap = new WarehouseMap(warehouseWidth, warehouseHeight, robot);
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 
    
    robot.move('N');
    robot.move('E');
    warehouseMap.printWarehouseMap(); 

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, '. . . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, '. & . . .');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, '. . . . .');
    consoleLogSpy.mockRestore(); 
  });
});
