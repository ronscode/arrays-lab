function nthElement(someArr) {
	let newArr = [];
	let counter = 1;
	for (let i = 0; i < someArr.length; i++) {
		if (i === 0 || counter % 3 === 0) {
			newArr.push(someArr[i]);
		}
		counter++;
	}
	console.log(newArr.join(" "));
}

nthElement(["5", "20", "31", "4", "20", "2"]);
nthElement(["dsa", "asd", "test", "test", "2"]);
nthElement(["1", "2", "3", "4", "5", "6"]);
