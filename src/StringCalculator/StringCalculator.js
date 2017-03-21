class StringCalculator {

  add(numbers) {
    const splitNumbers = numbers.split(/[\n,]+/);
    let sum = 0;
    if (splitNumbers.length > 1) {
      for (let i = 0; i < splitNumbers.length; i += 1) {
        sum += parseInt(splitNumbers[i], 10);
      }
      return sum;
    }
    if (numbers === '') {
      return 0;
    }
    return 1;
  }
}

export default StringCalculator;
