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


console.log(`🧬 charCount("Hello") @ File-Step5.js Line-28 🧬`, charCount("Hello, World!"));