// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function evenOdd(someArr) {
	let evens = someArr.filter((isEven) => {
		// isEven === someArr[i]
		if (isEven % 2 === 0) {
			return isEven;
		}
	});

	let odds = someArr.filter((isOdd) => {
		if (isOdd % 2 != 0) {
			return isOdd;
		}
	});

	let evenTotal = evens.reduce((a, b) => a + b, 0);
	let oddTotal = odds.reduce((a, b) => a + b, 0);
	console.log(
		evens.reduce((a, b) => a + b, 0) - odds.reduce((a, b) => a + b, 0)
	);
}

evenOdd([1, 2, 3, 4, 5, 6]);
evenOdd([3, 5, 7, 9]);
evenOdd([2, 4, 6, 8, 10]);
