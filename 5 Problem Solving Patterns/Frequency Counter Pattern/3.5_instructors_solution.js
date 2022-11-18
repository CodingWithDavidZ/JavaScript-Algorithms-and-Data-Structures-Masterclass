// This is the instructors solution to the anagram challenge

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}

	const lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
            // by decrementing the lookup object, we eliminate the need for a check at the end of the loop
			lookup[letter] -= 1;
		}
	}

	return true;
}
