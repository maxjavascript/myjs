const encrypt = (text) => {
	let str = '';
	for (let i = 0; i < text.length; i += 2) {
		if (i + 1 < text.length) {
			str += text[i + 1] + text[i];
		} 
        else {
			str += text[i];
		}
	}
    return str;
}

console.log(encrypt('Russia'));
