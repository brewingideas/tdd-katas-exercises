class RomanNumbers {

    //const within the class

      Numerals(number) {

        var numerals = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};


        const romanNumber = new RomanNumbers();

        for (var key = number; key>0; key--){
            if(key in numerals){
                if(number >= key){
                    return numerals[key]+romanNumber.Numerals(number-key);
                  }
              }
          }
          return '';
    }
}

export default RomanNumbers;