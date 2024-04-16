const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');

        function convertToRoman() {
            const number = parseInt(input.value);

            if (isNaN(number)) {
                output.textContent = 'Please enter a valid number.';
            } else if (number < 1) {
                output.textContent = 'Please enter a number greater than or equal to 1.';
            } else if (number >= 4000) {
                output.textContent = 'Please enter a number less than or equal to 3999.';
            } else {
                output.textContent = toRoman(number);
            }
        }

        function toRoman(number) {
            const romanNumerals = [
                ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], 
                ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], 
                ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], 
                ["", "M", "MM", "MMM"]
            ];

            let romanResult = '';
            romanResult += romanNumerals[3][Math.floor(number / 1000)];
            romanResult += romanNumerals[2][Math.floor((number % 1000) / 100)];
            romanResult += romanNumerals[1][Math.floor((number % 100) / 10)];
            romanResult += romanNumerals[0][number % 10];

            return romanResult;
        }

        button.addEventListener('click', convertToRoman);