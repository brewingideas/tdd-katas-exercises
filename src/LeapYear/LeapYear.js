class LeapYear {
  static isLeapYear(year) {
    return (LeapYear.isDivisableByFour(year) && LeapYear.isNotDivisableByOneHundred(year)) ||
           (LeapYear.isNotDivisableByFourHundred(year));
  }

  static isDivisableByFour(year) {
    return year % 4 === 0;
  }

  static isNotDivisableByOneHundred(year) {
    return year % 100 !== 0;
  }

  static isNotDivisableByFourHundred(year) {
    return year % 400 === 0;
  }
}

export default LeapYear;
