const printNumbers = initialNumber => {
	while (initialNumber > 0) {
		console.log(initialNumber);
		initialNumber -= 1;
	}
	console.log('finished!');
};

export default printNumbers;
