import RomanNumbers from './RomanNumbers';

describe('Roman Numbers Should', () => {

    it('return I when input is 1', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(1)).toBe("I");
    });

    it('return II when input is 2', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(2)).toBe("II");
    });

    it('return III when input is 3', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(3)).toBe("III");
    });

    it('return IV when input is 4', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(4)).toBe("IV");
    });

    it('return V when input is 5', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(5)).toBe("V");
    });

    it('return VI when input is 6', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(6)).toBe("VI");
    });

    it('return VII when input is 7', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(7)).toBe("VII");
    });

    it('return VIII when input is 8', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(8)).toBe("VIII");
    });

    it('return IX when input is 9', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(9)).toBe("IX");
    });

    it('return X when input is 10', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(10)).toBe("X");
    });

    it('return XI when input is 11', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(11)).toBe("XI");
    });

    it('return XII when input is 12', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(12)).toBe("XII");
    });

    it('return XIII when input is 13', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(13)).toBe("XIII");
    });

    it('return XIV when input is 14', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(14)).toBe("XIV");
    });

    it('return XXXIX when input is 39', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(39)).toBe("XXXIX");
    });

    it('return XL when input is 40', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(40)).toBe("XL");
    });

    it('return L when input is 50', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(50)).toBe("L");
    });

    it('return LXXX when input is 80', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(80)).toBe("LXXX");
    });

    it('return XC when input is 90', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(90)).toBe("XC");
    });

    it('return C when input is 100', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(100)).toBe("C");
    });

    it('return CD when input is 400', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(400)).toBe("CD");
    });

    it('return D when input is 500', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(500)).toBe("D");
    });

    it('return DCCCXLVI when input is 846', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(846)).toBe("DCCCXLVI");
    });

    it('return MCMXCIX when input is 1999', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(1999)).toBe("MCMXCIX");
    });

    it('return MMVIII when input is 2008', () => {
        const romanNumber = new RomanNumbers();
        expect(romanNumber.Numerals(2008)).toBe("MMVIII");
    });
});
