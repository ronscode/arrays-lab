// Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.

function sumEvenNums(someNums) {
	let sumOfEvens = 0;
	let strToNums = someNums.map((aNum) => {
		return parseInt(aNum);
	});
	let onlyEvenNums = strToNums.filter((evenNum) => {
		if (evenNum % 2 === 0) {
			return evenNum;
		}
	});
	let total = onlyEvenNums.reduce((a, b) => a + b, 0);
	let total = 0;
	for (let i = 0; i < onlyEvenNums.length; i++) {
		total += onlyEvenNums[i];
	}
	console.log(total);
}

sumEvenNums(["1", "2", "3", "4", "5", "6"]);
sumEvenNums(["3", "5", "7", "9"]);
sumEvenNums(["2", "4", "6", "8", "10"]);
