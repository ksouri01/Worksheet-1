const palindromes = function (string) {

    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s/g, '').toLowerCase();
    reverseString = string.split('').reverse().join('');
    return string === reverseString;
}

module.exports = palindromes
