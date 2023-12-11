const getNumberExplanation = num => {
	switch (num) {
		case 7:
			return 'prime number';
		case 666:
			return 'devil number';
		case 42:
			return 'answer for everything';
		default:
			return 'just a number';
	}
}

export default getNumberExplanation;
