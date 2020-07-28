/* Write a program which receives two string arrays and print on the console whether they are identical or NOT. Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on
the console following message:
'Arrays are identical. Sum: {sum}' */

function equalArrs(arr1, arr2) {
	let doMatch = true;
	let matchBreak = 0;

	for (let i = 0; i < arr1.length; i++) {
		let matchBreak = arr1.indexOf(arr1[i]);
		if (arr1[i] !== arr2[i]) {
			doMatch = false;
			console.log(
				`Arrays are not identical. Found difference at ${matchBreak} index.`
			);
		}
	}
	if (doMatch === true) {
		let equalSums = 0;
		for (let i = 0; i < arr1.length; ) {
			equalSums += Number(arr1.shift());
		}
		console.log(`Arrays are identical. Sum: ${equalSums}`);
	}
}

equalArrs(["10", "20", "30"], ["10", "20", "30"]);
equalArrs(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrs(["1"], ["10"]);
