import LeapYear from './LeapYear';

describe('Leap Year', () => {
  it('should return true if year is 1996', () => {
    expect(LeapYear.isLeapYear(1996)).toBeTruthy();
  });
  it('should return false if year is 2001', () => {
    expect(LeapYear.isLeapYear(2001)).toBeFalsy();
  });
  it('should return false if year is 2002', () => {
    expect(LeapYear.isLeapYear(2002)).toBeFalsy();
  });
  it('should return false if year is 2003', () => {
    expect(LeapYear.isLeapYear(2003)).toBeFalsy();
  });
  it('should return true if year is 4000', () => {
    expect(LeapYear.isLeapYear(4000)).toBeTruthy();
  });
  it('should return false if year is 1900', () => {
    expect(LeapYear.isLeapYear(1900)).toBeFalsy();
  });
  it('should return true if year is 2000', () => {
    expect(LeapYear.isLeapYear(2000)).toBeTruthy();
  });
  it('should return true if year is 1804', () => {
    expect(LeapYear.isLeapYear(1804)).toBeTruthy();
  });
  it('should return true if year is 2144', () => {
    expect(LeapYear.isLeapYear(2144)).toBeTruthy();
  });
  it('should return true if year is 2140', () => {
    expect(LeapYear.isLeapYear(2140)).toBeTruthy();
  });
});
