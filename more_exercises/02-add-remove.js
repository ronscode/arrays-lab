function addRemove(someArr) {
	let theNum = 1;
	let newArr = [];
	for (i = 0; i < someArr.length; i++) {
		if (someArr[i] === "add") {
			newArr.push(theNum);
		} else {
			newArr.pop();
		}
		theNum++;
	}
	console.log(newArr.join(" "));
}

addRemove(["add", "add", "add", "add"]);
addRemove(["add", "add", "remove", "add", "add"]);
addRemove(["remove", "remove", "remove"]);
