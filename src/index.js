module.exports = function toReadable (number) {
    const collation_list = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    let two_digit_number, first_digit, second_digit, last_digit;
    let n = 0, // - two_digit_number if n = 1 three_digit_number
    first_str = '', second_str = '', last_str = '';
    let converted_number = number.toString();
    if (Object.keys(collation_list).includes(converted_number)) {
        return collation_list[converted_number];
    }
    if (converted_number.length == 3) {
        first_digit = converted_number[0];
        first_str = collation_list[first_digit] + ' hundred';
        n = 1;
    }
    two_digit_number = (n == 1) ? number % 100 : number;
    if (converted_number[n] != 0) {
        if (two_digit_number > 19) {
            second_digit = converted_number[n] + '0';
            if (n == 1) {
                second_str = ' ';
            }
        second_str += collation_list[second_digit];
        } else {
            second_str = ' ' + collation_list[two_digit_number];
        }
    }
    if (converted_number[n + 1] != 0 && !((two_digit_number >= 11) && (two_digit_number <= 19))) {
        last_digit = converted_number[n + 1];
        last_str = ' ' + collation_list[last_digit];
    }
    return first_str + second_str + last_str;
}
