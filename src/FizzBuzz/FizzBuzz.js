class FizzBuzz {

  constructor() {
    this.numbers = new Array(100);
    for (let i = 0; i < this.numbers.length; i += 1) {
      this.numbers[i] = i + 1;
    }
  }

  setWord(i, divider, word) {
    if ((i + 1) % divider === 0) {
      this.numbers[i] = word;
    }
  }

  displayFizzBuzz() {
    for (let i = 0; i < this.numbers.length; i += 1) {
      this.setWord(i, 3, 'Fizz');
      this.setWord(i, 5, 'Buzz');
      this.setWord(i, 15, 'FizzBuzz');
    }
  }

  print() {
    this.displayFizzBuzz();
    return this.numbers;
  }
}

export default FizzBuzz;
