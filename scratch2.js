function main(numArray) {
	if (numArray.length == 1) {
		console.log(numArray[0]);
	} else {
		while (numArray.length > 1) {
			let condensedArray = [];
			for (i = 0; i < numArray.length - 1; i++) {
				condensedArray[i] = numArray[i] + numArray[i + 1];
			}
			numArray = [];
			for (i = 0; i < condensedArray.length; i++) {
				numArray[i] = condensedArray[i];
			}
		}

		console.log(numArray);
	}
}
main([5, 0, 4, 1, 2]);
