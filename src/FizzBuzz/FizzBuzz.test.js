import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {
  it('should print 100 values', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers.length).toBe(100);
  });

  it('shoud print Fizz on the third item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[2]).toBe('Fizz');
  });

  it('should print Buzz on the fifth item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[4]).toBe('Buzz');
  });

  it('should print FizzBuzz on the fifthteenth item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[14]).toBe('FizzBuzz');
  });

  it('should print Fizz on sixth item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[5]).toBe('Fizz');
  });

  it('should print Buzz on twenty-fifth item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[24]).toBe('Buzz');
  });

  it('should print FizzBuzz on thirtieth item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[29]).toBe('FizzBuzz');
  });

  it('should print 7 on seventh item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[6]).toBe(7);
  });
  it('should print 22 on twenty-second item', () => {
    const fizzBuzz = new FizzBuzz();
    const numbers = fizzBuzz.print();
    expect(numbers[21]).toBe(22);
  });
});
