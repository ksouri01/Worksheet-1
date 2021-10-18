function translate(string) {
	string = string.toLowerCase();
	let words = string.split(" ");

	let returnPigLatin = words.map(word => {
		let n = word.match(/[aeiou]/gi).length;
		switch (n) {
			case 0: word = word + "way"; break;
			case -1: word = word + "ay"; break;
			default:
				if (word.includes("qu")) {
					word = word.replace(/([^aeio]*)([aeio])(\w+)/, "$2$3$1ay");
				} else if (n === 1 && word.length === 3 && word.slice(word.length - 1).match(/[aeiou]/gi)) {
					word = word.replace(/([^aeiou]*)(\w+)/, "$2$1ay");
				}
				else {
					word = word.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
				}
				break;
		}
		return word;
	})

	return returnPigLatin.join(" ");

}


module.exports = {
	translate
}