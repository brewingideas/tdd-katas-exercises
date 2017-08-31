import StringCalculator from './StringCalculator';

describe('String Calculator Should', () => {

    it('return zero when string is empty', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add()).toEqual(0);
    });

    it('return 1 when string contains 1', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add(1)).toEqual(1);
    });

    it('return 2 when string contains 2', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add(2)).toEqual(2);
    });

    it('return 3 when string contains 3', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('3')).toEqual(3);
    });

    it('return 100 when string contains 100', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('100')).toEqual(100);
    });

    it('return 3 when string contains 1,2', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('1,2')).toEqual(3);
    });

    it('return 4 when string contains 2,2', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('2,2')).toEqual(4);
    });

    it('return 1991 when string contains 253,1738', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('253,1738')).toEqual(1991);
    });

    it('return 9 when string contains 3,3,3', () => {
        const stringCalculator = new StringCalculator();
    expect(stringCalculator.Add('3,3,3')).toEqual(9);
    });

    it('return 28 when string contains 20,4,4', () => {
        const stringCalculator = new StringCalculator();
    expect(stringCalculator.Add('20,4,4')).toEqual(28);
    });

    it('return 35 when string contains 20,10,5', () => {
        const stringCalculator = new StringCalculator();
    expect(stringCalculator.Add('20,10,5')).toEqual(35);
    });




});