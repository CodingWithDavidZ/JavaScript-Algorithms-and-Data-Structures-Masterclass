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

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true