class StringCalculator {


    Add(numbers) {

        const DefaultDelimiter = ',';

        if(numbers === undefined){
            return 0;
        }

        numbers = numbers.toString();

        var delimiter = DefaultDelimiter;

        if (numbers.match(/\/\/(.)\n/g)){
            delimiter = numbers[2];
            numbers = numbers.substr(4);
        }

        var separatedNumbers = String(numbers).replace(/\n/g, delimiter).split(delimiter);

        var  number;
        var total = 0;

        for (var i = 0; i < separatedNumbers.length; i++) {
            number = Number(separatedNumbers[i]);
            // console.log(number);
            total = total + number;
        }

        return total;
    }
}

export default StringCalculator;