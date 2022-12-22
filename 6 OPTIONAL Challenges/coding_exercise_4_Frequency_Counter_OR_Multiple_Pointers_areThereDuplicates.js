// Question:
// 	• Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Sample Inputs:
// 	• areThereDuplicates(1, 2, 3) // false
// 	• areThereDuplicates(1, 2, 2) // true 
// 	• areThereDuplicates('a', 'b', 'c', 'a') // true 

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

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true