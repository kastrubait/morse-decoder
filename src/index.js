const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr =[];
    for (let i = 0; i < expr.length; i +=10)
        arr = arr.concat(expr.slice(i, i+10));
    let newArr = [];
    for ( let el of arr) {
        let strR = [];
        if (el === '**********') {
            strR = strR + ' ';
            newArr.push(strR);
        } else {
            let a ='';
            for (let i = 0; i < el.length; i +=2) {
                a = el.substr(i, 2)
                switch (a) {
                    case '00':
                        strR = strR + '';
                        break;
                    case '10':
                        strR = strR + '.';
                        break;
                    case '11':
                        strR = strR + '-';
                        break;
                }
            }
            newArr = newArr.concat(MORSE_TABLE[strR]);
        }
    }
    return newArr.join('');
}

module.exports = {
    decode
}
