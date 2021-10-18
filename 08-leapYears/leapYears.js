const leapYears = function (year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

module.exports = leapYears
