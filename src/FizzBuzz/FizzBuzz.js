class FizzBuzz {

    print(number) {
        let value = '';

        if (number % 3 === 0) value = 'fizz';

        if (number % 5 === 0) value += 'buzz';

        if (value === '') return number;

        return value;
    };

}

export default FizzBuzz;
