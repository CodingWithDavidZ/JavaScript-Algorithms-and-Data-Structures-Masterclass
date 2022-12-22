//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

// Sample Input:
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

// Problem Solving Approach:
// Understanding the Problem:
// 	1. Can I restate the problem in my own words:
// 		○  write a function that checks if two positive integers have the same numbers, the same number of times
// 	2. What inputs go into the problem:
// 		○  2 positive integers
// 	3. What is the expected output:
// 		○ Data type: Boolean
// 		○ Example: True or False
// 	4. Can the output be determined from the input:
// 		○  Yes
// 	5. How should I label the data:
// 		○ Function Names:
// 			§ sameFrequency
// 		○ Inputs:
// 			§ num1
// 			§ num2
// 		○ Variables:
// 		○ Outputs:
// 			§ result
// Concrete Examples:
// 	1. Simple Examples:
// 		○ Input: 345, 534
// 			§  Output: True
// 		○ Input: 3345, 3335
// 			§  Output: False
// 		○ Input: 784, 7841
// 			§  Output: False
// 	2. Complex Examples:
// 		○ Input: 3589578, 5879385
// 			§  Output: True
// 	3. Edge Cases: (NaN, Null, Error, Not Found, etc…)
// 		○  N/A given inputs will all be positive integers
// Break It Down Step-by-step:
// 	• check to see if the inputs are the same length, else return false
// 	• convert the integer into an array using arr.split("")
// 		○ I wonder if there is a way to convert to an object instead
// 	• convert array to an object where the key will be the single-digit-integer  of num1 and the value will 1
// 	• iterate through num1 array and subtract each single-digit-integer from the num1 object
// 	• check that all the objects values are zero.
// 		○ if there is a -1 then num2 had a value num1 didn't 
// 		○ if there is a 1 then num1 had a value num2 didn't
// Can You Solve This Problem:
// 	• Yes
// 		○ Do it

function sameFrequency(num1, num2) {
  
  let num1Arr = num1.toString().split("");
  let num2Arr = num2.toString().split("");
 
  let num1Obj = {};
  
  if (num1Arr.length !== num2Arr.length) {
    return false;
  }

  for (let i = 0; i < num1Arr.length; i++) {
    // if the key exists then add 1 to the value if not then create the key and set the value to 1
    if (num1Obj[num1Arr[i]]) {
      num1Obj[num1Arr[i]] += 1;
    } else {
      num1Obj[num1Arr[i]] = 1;
    }
  }
  
  for (let i = 0; i < num2Arr.length; i++) {
    if (num1Obj[num2Arr[i]] === undefined) {
      return false;
    } else {
      num1Obj[num2Arr[i]] -= 1;
    }
  }
  // if all the values are 0 then return true
  for (let key in num1Obj) {
    if (num1Obj[key] !== 0) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

