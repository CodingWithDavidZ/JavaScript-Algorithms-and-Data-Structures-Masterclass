function same(arr1, arr2) {
	// if the two arrays have different lengths, return false because they cannot be the same
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		// if the correctIndex is -1, it means that the value is not in the array so return false
		if (correctIndex === -1) {
			return false;
		}
		console.log(arr2);
		// remove the value from the array so that it is not counted again
		arr2.splice(correctIndex, 1);
	}
	return true;
}

var time1 = performance.now();
same([1, 2, 2, 3], [9, 1, 4, 4]);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
