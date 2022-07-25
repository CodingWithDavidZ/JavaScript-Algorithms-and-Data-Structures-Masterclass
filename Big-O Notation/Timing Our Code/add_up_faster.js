function addUpTo(n) {
	return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);


// completes in about 0.047 seconds
// Big O of 1 is O(1)

console.log(
	(() => {
		console.log(12);
		return 5;
	})()
);
