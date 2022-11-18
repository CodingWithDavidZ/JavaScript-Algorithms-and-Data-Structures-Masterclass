function same(arr1, arr2) {
	// if the two arrays have different lengths, return false because they cannot be the same
	if (arr1.length !== arr2.length) {
		return false;
	}
	// create two objects to store the frequency of each value in each array
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	// loop through the first array and add the value to the object if it does not exist, otherwise increment the value
	for (let val of arr1) {
		// if the value does not exist, set it to 1, otherwise increment it
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	// loop through the second array and add the value to the object if it does not exist, otherwise increment the value
	for (let val of arr2) {
		// if the value does not exist, set it to 1, otherwise increment it
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	// 
	for (let key in frequencyCounter1) {
		// if the key squared is not in the second object, return false
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		// if the value of the key squared in the second object is not equal to the value of the key in the first object, return false
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}
var time1 = performance.now();
same([1, 2, 2, 3], [9, 1, 4, 4]);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
