function printArray() {
	let numbers = [1, 2, 3, 4, 5];
	let output = "";
	// for (let number of numbers) {
	// 	output += `${number}`; // array[i]
	// }

	numbers.map((item) => {
		output += item;
	});
	console.log(output);
}

printArray();
