class StringCalculator {
  constructor() {
    this.sum = 0;
    this.customDelimiter = null;
  }

  static checkIfNegative(number) {
    if (parseInt(number, 10) < 0) {
      throw new Error(`Negatives not allowed: ${number}`);
    }
    return parseInt(number, 10);
  }

  addNumbersToSum(numbers) {
    numbers.forEach((number) => {
      this.sum += this.checkIfNegative(number);
    });
  }

  checkAndAddForCustomDelimiter(numbers) {
    if (numbers.indexOf('//') === 0) {
      this.customDelimiter = numbers.substr(2, 1);
      const theRest = numbers.substr(4);
      this.addNumbersToSum(theRest.split(this.customDelimiter));
    }
  }

  addWithDefaultDelimiter(numbers) {
    if (!this.customDelimiter) {
      numbers.split(',').forEach((number) => {
        if (number.indexOf('\n') === -1) {
          this.sum += this.checkIfNegative(number);
        } else {
          this.addNumbersToSum(number.split('\n'));
        }
      });
    }
  }

  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    this.checkAndAddForCustomDelimiter(numbers);
    this.addWithDefaultDelimiter(numbers);

    return this.sum;
  }
}

export default StringCalculator;
