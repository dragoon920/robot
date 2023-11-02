import Robot from './robot';
import Crate from './crate';

describe('Robot class test', () => {
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
});



