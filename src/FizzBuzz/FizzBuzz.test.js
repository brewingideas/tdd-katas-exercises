import FizzBuzz from './FizzBuzz';

describe('FizzBuzz Should', () => {

  it('print one when value is one', () => {
      const fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.print(1)).toEqual(1);
    });

  it('print two when value is two', () => {
      const fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.print(2)).toEqual(2);
    });

    it('print fizz when value is three', () => {
        const fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(3)).toEqual('fizz');
    });

    it('print four when value is four', () => {
        const fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(4)).toEqual(4);
    });

    it('print buzz when value is five', () => {
        const fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(5)).toEqual('buzz');
    });

    it('print fizz when value is six', () => {
        const fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(6)).toEqual('fizz');
    });

    it('print buzz when value is nine', () => {
        const fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(9)).toEqual('fizz');
    });

    it('print buzz when value is ten', () => {
        const fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(10)).toEqual('buzz');
    });

    it('print fizzbuzz when value is fifteen', () => {
        const fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(15)).toEqual('fizzbuzz');
    });


});
