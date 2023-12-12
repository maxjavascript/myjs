const joinNumbersFromRange = (at, to) => {
	let str = '';
	if (at === to) {
		return str = at.toString();
	} else {
		while (at <= to) {
			str += at.toString();
			at++;
		}
	}
	return str;
}

console.log(joinNumbersFromRange(10,18));
