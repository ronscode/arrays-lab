// function reverseArray(arr) {
// 	for (let i = 0; i < arr.length / 2; i++) {
// 		let oldElement = arr[i];
// 		let previousIndex = arr.length - 1 - i;
// 		arr[i] = arr[previousIndex];
// 		arr[previousIndex] = oldElement;
// 	}
// 	console.log(arr.join(" "));
// }

// function reverseArray(someArr) {
// 	let newString = "";
// 	for (let item of someArr) {
// 		newString += someArr.pop();
// 	}
// 	console.log(newString);
// }

function reverseArray(someArr) {
	console.log(someArr.reverse().join(" "));
}

reverseArray(["a", "b", "c", "d", "e"]);
