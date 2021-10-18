const fibonacci = function (index) {
    index = parseInt(index);
    if (index < 0) {
        return 'OOPS'
    }
    const fibonacci_array = (max_index) => {
        if (max_index === 0) {
            return [0, 1];
        }
        else {
            let array = fibonacci_array(max_index - 1);
            array.push(array[array.length - 1] + array[array.length - 2]);
            return array;
        }
    }
    return fibonacci_array(index)[index]
}
module.exports = fibonacci
