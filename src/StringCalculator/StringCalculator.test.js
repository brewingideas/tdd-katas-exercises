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

    it('return 39 when string contains 20,10,5, 4', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('20,10,5, 4')).toEqual(39);
    });

    it('return 139 when string contains 20,10,5, 4, 50, 25, 24, 1', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('20,10,5, 4, 50, 25, 24, 1')).toEqual(139);
    });

    it('return 6 when string contains 1\n2,3', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('1\n2,3')).toEqual(6);
    });

    it('return 8 when string contains 3\n2,3', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('3\n2,3')).toEqual(8);
    });

    it('return 2 when string contains 1\n1', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('1\n1')).toEqual(2);
    });

    it('return 12 when string contains 3\n2\n3\n4', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('3\n2\n3\n4')).toEqual(12);
    });

    it('return 1 when string contains 1,\n', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('1,\n')).toEqual(1);
    });

    it('return 3 when string contains //;\n1;2', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//;\n1;2')).toEqual(3);
    });

    it('return 4 when string contains //;\n1;1;2', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//;\n1;1;2')).toEqual(4);
    });

    it('return 7 when string contains //;\n1;1;2;1;1;1', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//;\n1;1;2;1;1;1')).toEqual(7);
    });

    it('return 4 when string contains //.\n1.3', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//.\n1.3')).toEqual(4);
    });

    it('return 8 when string contains //.\n1.3.4', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//.\n1.3.4')).toEqual(8);
    });

    it('return 12 when string contains //.\n1.3.4', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//.\n1.3.2.2.4')).toEqual(12);
    });

    it('return 5 when string contains //:\n1:4', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//:\n1:4')).toEqual(5);
    });
    it('return 6 when string contains //$\n1$4$1', () => {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.Add('//$\n1$4$1')).toEqual(6);
    });


});


// string with / or , - should we cover
// why does this pass '1,\n? - how do we make this not okay