import LeapYear from './LeapYear';

describe('Leap Year', () => {
  it('should return true if year is 1996', () => {
    expect(LeapYear.isLeapYear(1996)).toBeTruthy();
  });

  it('should return false if year is 1997', () => {
      expect(LeapYear.isLeapYear(1997)).toBeFalsy();
  });

  it('should return false if year is 1998', () => {
      expect(LeapYear.isLeapYear(1998)).toBeFalsy();
  });

  it('should return false if year is 1999', () => {
        expect(LeapYear.isLeapYear(1999)).toBeFalsy();
    });

    it('should return true if year is 1992', () => {
        expect(LeapYear.isLeapYear(1992)).toBeTruthy();
    });

    it('should return true if year is 2004', () => {
        expect(LeapYear.isLeapYear(2004)).toBeTruthy();
    });

    it('should return true if year is 1900', () => {
        expect(LeapYear.isLeapYear(1900)).toBeFalsy();
    });

    it('should return true if year is 1800', () => {
        expect(LeapYear.isLeapYear(1800)).toBeFalsy();
    });

    it('should return true if year is 1700', () => {
        expect(LeapYear.isLeapYear(1700)).toBeFalsy();
    });

    it('should return true if year is 2000', () => {
        expect(LeapYear.isLeapYear(2000)).toBeTruthy();
    });
    it('should return true if year is 2400', () => {
        expect(LeapYear.isLeapYear(2400)).toBeTruthy();
    });

    it('should return true if year is 1600', () => {
        expect(LeapYear.isLeapYear(1600)).toBeTruthy();
    });

});
