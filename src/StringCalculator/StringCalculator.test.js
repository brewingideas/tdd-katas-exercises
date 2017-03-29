import Calculator from './StringCalculator';

describe('String Calculator', () => {
  it('should return zero when given empty string', () => {
    const calc = new Calculator();
    expect(calc.add('')).toBe(0);
  });

  it('should return 1 when given 1', () => {
    const calc = new Calculator();
    expect(calc.add('1')).toBe(1);
  });

  it('should return 3 when given 1 and 2', () => {
    const calc = new Calculator();
    expect(calc.add('1,2')).toBe(3);
  });

  it('should return 6 when given 1, 2 and 3', () => {
    const calc = new Calculator();
    expect(calc.add('1,2,3')).toBe(6);
  });

  it('should return 8 when given 1, 2, 3 and 3', () => {
    const calc = new Calculator();
    expect(calc.add('1,2,3,3')).toBe(9);
  });

  it('should return 8 when given 1, 2\n 3 and 2', () => {
    const calc = new Calculator();
    expect(calc.add('1,2\n3,2')).toBe(8);
  });

  it('should not return 4 when given 1,\n 3', () => {
    const calc = new Calculator();
    expect(calc.add('1,\n3')).not.toBe(4);
  });

  it('should return 3 when given //;\n1;2', () => {
    const calc = new Calculator();
    expect(calc.add('//;\n1;2')).toBe(3);
  });

  it('should return an error when given -1', () => {
    const calc = new Calculator();
    expect(() => {
      calc.add('-1');
    }).toThrow(new Error('Negatives not allowed: -1'));
  });
});
