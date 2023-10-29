import Robot from './robot';

describe('Robot class test', () => {
  test('move method should update the position correctly', () => {
    const robot = new Robot(3,3);
    robot.move('N');
    expect(robot.getPosition()).toBe('(0,1)');

    robot.move('E');
    expect(robot.getPosition()).toBe('(1,1)');

    robot.move('S');
    expect(robot.getPosition()).toBe('(1,0)');

    robot.move('W');
    expect(robot.getPosition()).toBe('(0,0)');
  });

  test('move method should not allow the robot to move outside the warehouse boundary', () => {
    const robot = new Robot(3,3);
    robot.move('S');
    expect(robot.getPosition()).toBe('(0,0)');

    robot.move('W');
    expect(robot.getPosition()).toBe('(0,0)');

    robot.move('E');
    expect(robot.getPosition()).toBe('(1,0)');

    robot.move('E');
    expect(robot.getPosition()).toBe('(2,0)');

    robot.move('N');
    expect(robot.getPosition()).toBe('(2,1)');

    robot.move('N');
    expect(robot.getPosition()).toBe('(2,2)');

    robot.move('N');
    expect(robot.getPosition()).toBe('(2,2)');
  });
});



