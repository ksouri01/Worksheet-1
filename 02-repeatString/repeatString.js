const repeatString = function(string, repetition) {

  if (repetition === 0) {
    return '';
  }
  else if (repetition < 0) {
    return 'ERROR';
  }
  else if (repetition > 0) {
    return string.repeat(repetition)
  }

}

module.exports = repeatString
