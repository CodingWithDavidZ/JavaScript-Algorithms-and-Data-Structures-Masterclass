function logAtLeast5(n) {
	for (var i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

// Compare this snippet from Big-O Notation/Simplifying Big O/LogAtMost5.js:
// O(1) because n can only reach a max of 5 before it plateaus
