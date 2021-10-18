function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	return array.reduce((a, b) => a + b, 0)
}

function multiply(array) {
	return array.reduce((a, b) => a * b)
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(a) {
	if (a === 0) { return 1; }
	else { return a * factorial(a - 1); }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}