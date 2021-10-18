const snakeCase = function (string) {
    if (string.includes("-")) {
        string = string.replaceAll("-", " ")
    }
    if (string.includes("..") && !string.includes("....")) {
        string = string.replaceAll("..", " ").toLowerCase();
    }
    return string.replace(/\d+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join('_')
        .replace(/[.,\/#!$%\^&\*;:{}=\-`~()?]/g, '')
        .replace(/\s/g, '').toLowerCase()
}

module.exports = snakeCase
