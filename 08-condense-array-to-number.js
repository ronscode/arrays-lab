// Write a program which receives an array of numbers and condense them by summing adjacent couples of elements until a single number is obtained.

function condenseArr(someArr) {
	let singleNum = 0;
	let newArr = [];
	for (let i = 0; i < someArr.length; i++) {
		newArr[i] = someArr[i] + someArr[i + 1];
	}
	console.log(newArr);
}

condenseArr([2, 10, 3]);
