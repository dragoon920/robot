const WarehouseMap = require('./warehouseMap');
const Robot = require('./robot');

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

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, '_ _ _ _ _ ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, '_ _ _ _ _ ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, '_ _ _ _ _ ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, '_ & _ _ _ ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, '_ _ _ _ _ ');
    consoleLogSpy.mockRestore(); 
  });
});
