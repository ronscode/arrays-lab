function reverseArray(n, inputArr) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(inputArr[i]);
	}
	// arr = [10, 20, 30] // join it with a space // .join(" ")

	let output = "";

	for (let i = arr.length - 1; i >= 0; i--) {
		output += `${arr[i]} `;
	}
	console.log(output);
}

reverseArray(3, [10, 20, 30, 40]);
