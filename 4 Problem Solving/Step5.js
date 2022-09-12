//Look Back and Refactor

// Refactoring Questions:
// 	• Can you check the result?
// 	• Can you derive the result differently?
// 	• Can you understand it at a glance?
// 	• Can you use the result or method for some other problem?
// 	• Can you improve the performance of your solution?
// 	• Can you think of other ways to refactor?
//  • How have other people solved this problem?

//Example:

function charCount(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}
//explaining the code in plain English step by step
//the charCount function takes in a string and returns an object with keys that are lowercase alphanumeric characters in the string; values should be the count for those characters
//the function takes in a string and assigns it to the variable str
//the function creates an empty object and assigns it to the variable obj
//the function loops over the string, for each character...
//the function assigns the current character to the variable char
//the function checks if the current character is a number/letter
//the function checks if the current character is a key in the object
//the function adds one to the count if the current character is a key in the object
//the function adds the current character to the object and sets the count to one if the current character is not a key in the object
//the function returns the object at the end
console.log(`🧬 charCount("Hello") @ File-Step5.js Line-28 🧬`, charCount("Hello, World!"));

// REFACTORED CODE
function charCountRefactored(str) {
	let obj = {};
	for (let char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
            // Note: Regex is a very powerful tool, but it's also very slow. See below for a faster solution.
            //if (isAlphaNumeric(char)) {
			obj [char] = ++obj[char] || 1;
		}
	}
	return obj;
    // to sort the keys in the object alphabetically use the following code:
    // return Object.keys(obj).sort().reduce((key, value) => (key[value] = obj[value], key), {});
}

console.log(`🧬 charCountRefactored("Hello") @ File-Step5.js Line-48 🧬`, charCountRefactored("Hello, World!"));

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}