const sumAll = function (firstNumber, secondNumber) {
    let range = 0;
    let start;
    let end;

    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber) || firstNumber < 0 || secondNumber < 0) {
        return 'ERROR';
    }

    if (secondNumber < firstNumber) {
        start = secondNumber;
        end = firstNumber;
    }
    else {
        start = firstNumber;
        end = secondNumber;
    }

    range = (end) - start;
    range++;

    return range * (range + 1) / 2;

}

module.exports = sumAll