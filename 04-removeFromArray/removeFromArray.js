const removeFromArray = function(array, a, b, c, d) {

  if (a && !b && !c && !d) {
    return array.filter((item) => item !== a);
  }

  if (a && b && !c && !d) {
    return array.filter((item) => { return item !== a && item !== b });
  }


  if (a && b && c && d) {
    return array.filter((item) => { return item !== a && item !== b && item !== c && item !== d });
  }
}

module.exports = removeFromArray
