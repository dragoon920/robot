import Crate from './crate';

describe('crate class test', () => {
  test('move function should update crate position correctly',()=>{
    const crate = new Crate(4,5);
    expect(crate.getPosition()).toStrictEqual({x: 4, y: 5});
  });


});