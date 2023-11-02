import Robot from './robot';
import Crate from './crate';

describe('Robot class test', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
      consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
      consoleLogSpy.mockRestore();
  });


  test('move method should update the position correctly', () => {
    let crates = [new Crate(2, 1), new Crate(1,2)]
    const robot = new Robot(3, 3, crates);
    robot.action('N');
    expect(robot.getPosition()).toBe('(0,1)');

    robot.action('E');
    expect(robot.getPosition()).toBe('(1,1)');

    robot.action('S');
    expect(robot.getPosition()).toBe('(1,2)');

    robot.action('W');
    expect(robot.getPosition()).toBe('(0,2)');
  });

  test('move method should not allow the robot to move outside the warehouse boundary', () => {
    let crates = [new Crate(2, 1), new Crate(1,2)]
    const robot = new Robot(3, 3, crates);
    robot.action('S');
    expect(robot.getPosition()).toBe('(0,2)');

    robot.action('W');
    expect(robot.getPosition()).toBe('(0,2)');

    robot.action('E');
    expect(robot.getPosition()).toBe('(1,2)');

    robot.action('E');
    expect(robot.getPosition()).toBe('(2,2)');

    robot.action('E');
    expect(robot.getPosition()).toBe('(2,2)');

    robot.action('N');
    expect(robot.getPosition()).toBe('(2,1)');

    robot.action('N');
    expect(robot.getPosition()).toBe('(2,0)');

    robot.action('N');
    expect(robot.getPosition()).toBe('(2,0)');
  });

  test('liftCrate function should lift a crate when there is a crate', () => {
    let crates = [new Crate(1, 1), new Crate(1,2)]
    const robot = new Robot(3, 3, crates);
    robot.action('E');
    robot.action('N');
    robot.action('G');
    expect(robot.isLifting).toBe(true);
  });

  test('liftCrate function should return an error when there is not a crate', () => {
    let crates = [new Crate(1, 1), new Crate(1,2)]
    const robot = new Robot(3, 3, crates);
    robot.action('N');
    robot.action('G');

    expect(console.log).toHaveBeenCalledWith('No crate to lift at this position.');
    expect(robot.isLifting).toBe(false);
  });


  test('liftCrate function should return an error if already lift a crate', () => {
    let crates = [new Crate(1, 1), new Crate(1,2)]
    const robot = new Robot(3, 3, crates);
    robot.action('E');
    robot.action('G');
    robot.action('N');
    robot.action('G');
    expect(console.log).toHaveBeenCalledWith('Already lifting a crate.');
    expect(robot.isLifting).toBe(true);
  });



});



