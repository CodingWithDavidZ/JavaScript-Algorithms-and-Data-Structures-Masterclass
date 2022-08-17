	// • Start with examples
	// 	○ write down 2-3 simple examples with the input and output
	// 	○ Progress with a few more complex examples
	// 	○ Explore edge cases like:
	// 		§ Empty Inputs
	// 		§ Invalid Inputs

// Example Question:
// 	Write a function which takes in a string and returns counts of each character in the string

//Step 1:
			// 1. Can I restate the problem in my own words?
			// 	□ return a count of char in a string
			// 2. What are the inputs that go into the problem?
			// 	□ string
			// 3. What are the outputs that should come from the solution to the problem
			// 	□ integer
			// 4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem
			// 	□ yes, provided a proper input
			// 5. How should I label the important pieces of data that are a part of the problem?
			// 	□ Function
			// 		® charCount
			// 	□ Input
			// 		® string
			// 	□ Output
			// 		® result
			// 		® error

//Step 2:
			// § Simple Examples
			// 	□ Input: Banana
			// 		® Output 6
			// 	□ Input: Banana!
			// 		® Output: 7
			// 	□ Input: B a n a n a
			// 		® Output: 11
			// § Complex examples
			// 	□ Input 1: Frozen, Input 2 Banana
			// 		® Output: 12 with no space, 13 with space between strings
			// § Edge Case Example
			// 	□ Input: null, NaN, integer
			// 	□ Output: "Input invalid"

function charCount(string) {
    if (typeof string !== "string") {
        return "Input invalid";
    }
    let result = string.length;
    return result;
}

console.log(charCount("Banana"));
console.log(charCount("Banana!"));
console.log(charCount("B a n a n a"));
console.log(charCount(null));
console.log(charCount(NaN));
console.log(charCount(1));

