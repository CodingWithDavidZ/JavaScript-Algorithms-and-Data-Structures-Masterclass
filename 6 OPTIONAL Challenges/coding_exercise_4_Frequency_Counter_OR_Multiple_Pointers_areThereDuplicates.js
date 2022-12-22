// Question:
// 	• Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Sample Inputs:
// 	• areThereDuplicates(1, 2, 3) // false
// 	• areThereDuplicates(1, 2, 2) // true 
// 	• areThereDuplicates('a', 'b', 'c', 'a') // true 

// Problem Solving Approach:
// Understanding the Problem:
// 	1. Can I restate the problem in my own words:
// 		○ Check a random number of given input for duplicates
// 	2. What inputs go into the problem:
// 		○ Int
// 		○ String
// 	3. What is the expected output:
// 		○ Data type: Boolean
// 		○ Example: True or False
// 	4. Can the output be determined from the input:
// 		○ Yes 
// 	5. How should I label the data:
// 		○ Function Names:
// 			§ areThereDuplicates
// 		○ Inputs:
// 			§ args
// 		○ Variables:
// 			§ argObj
// 		○ Outputs:
// 			§ result
// Concrete Examples:
// 	1. Simple Examples:
// 		○ Input: (3,2,1,2)
// 			§  Output: True
// 		○ Input: (3,2,1,4)
// 			§  Output: False
// 		○ Input: (a,c,e,t,e)
// 			§  Output: True
// 	2. Complex Examples:
// 		○ Input: 
// 			§  Output: 
// 	3. Edge Cases: (NaN, Null, Error, Not Found, etc…)
// 		○ check if result is boolean, if false, return "input error"
// Break It Down Step-by-step:
// 	•  Create an object that take each argument as a key and if the key doesn't exist in the object, initialize to one, and if it does exist ++
// 	•  Check that objects values do not exceed 1
// Can You Solve This Problem:
// 	• Yes
// Do it

function areThereDuplicates() {
  //create one object to store all arguments where the key is the argument and the value is the number of times it appears
    let argObj = {};
    //iterate through the arguments
    for (let i = 0; i < arguments.length; i++) {
        //if the key exists then add 1 to the value if not then create the key and set the value to 1
        if (argObj[arguments[i]]) {
            argObj[arguments[i]] += 1;
        } else {
            argObj[arguments[i]] = 1;
        }
        }
        //IF any of the values are greater than 1 then return true
        console.log((argObj))
       //check each value in the object and if the value is greater than 1 then return true, else return false
        for (let key in argObj) {
            if (argObj[key] > 1) {
                return true;
            }
        }
        return false;
    }

var Time1 = performance.now();
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
var Time2 = performance.now();
console.log(`Time Elapsed: ${(Time2 - Time1) / 1000} seconds.`);

// ========================================================

//Instructor Solution (Frequency Counter):
function areThereDuplicates2() {
	let collection = {};
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
}

var Time3 = performance.now();
areThereDuplicates2(1, 2, 3); // false
areThereDuplicates2(1, 2, 2); // true
areThereDuplicates2('a', 'b', 'c', 'a'); // true
var Time4 = performance.now();
console.log(`Time Elapsed: ${(Time4 - Time3) / 1000} seconds.`);

// ========================================================
// Instructor Solution (Multiple Pointers):
function areThereDuplicates3(...args) {
	// Two pointers
	args.sort((a, b) => a > b);
	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

var Time5 = performance.now();
areThereDuplicates3(1, 2, 3); // false
areThereDuplicates3(1, 2, 2); // true
areThereDuplicates3('a', 'b', 'c', 'a'); // true
var Time6 = performance.now();
console.log(`Time Elapsed: ${(Time2 - Time1) / 1000} seconds.`);

// ========================================================

// Instructor Solution (One Liner):
function areThereDuplicates4() {
    return new Set(arguments).size !== arguments.length;
}

var Time7 = performance.now();
areThereDuplicates4(1, 2, 3); // false
areThereDuplicates4(1, 2, 2); // true
areThereDuplicates4('a', 'b', 'c', 'a'); // true
var Time8 = performance.now();
console.log(`Time Elapsed: ${(Time8 - Time7) / 1000} seconds.`);
