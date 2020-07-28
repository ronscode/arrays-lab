function nonDec(someArr) {
	let bigNum = -Infinity;
	let newArr = someArr.filter((x) => {
		// arrow function
		if (x > bigNum) {
			bigNum = x;
			return x;
		}
		bigNum = x;
	});
	console.log(newArr.join(" "));
}

nonDec([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDec([1, 2, 3, 4]);
