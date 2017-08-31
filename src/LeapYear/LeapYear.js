class LeapYear {
  static isLeapYear(year) {

    if (year % 400 === 0 && year ) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;

    return false;
  }
}

export default LeapYear;
