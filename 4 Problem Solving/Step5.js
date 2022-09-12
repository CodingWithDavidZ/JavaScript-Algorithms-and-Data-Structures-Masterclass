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
    var obj = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
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