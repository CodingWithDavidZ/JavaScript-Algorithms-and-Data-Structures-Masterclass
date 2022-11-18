// Create a validAnagram function that accepts two strings and returns true if the second string is an anagram of the first string. Otherwise, return false.


function validAnagram(str1, str2){
    
    let str1Lowercase = str1.toLowerCase();
    let str2Lowercase = str2.toLowerCase();
    let str1Array = str1Lowercase.split('');
    let str2Array = str2Lowercase.split('');
    // remove punctuation
    // let str1ArrayNoPunctuation = str1Array.filter(function(char){
    //     return char.match(/[a-z]/i);
    // });
    // let str2ArrayNoPunctuation = str2Array.filter(function(char){
    //     return char.match(/[a-z]/i);
    // });
    let str1FrequencyCounter = {};
    let str2FrequencyCounter = {};
    
    if (str1Array.length !== str2Array.length) {
    
        return false;
    } else {
        for (let val of str1Array) {
            str1FrequencyCounter[val] = (str1FrequencyCounter[val] || 0) + 1;
        }
        for (let val of str2Array) {
            str2FrequencyCounter[val] = (str2FrequencyCounter[val] || 0) + 1;
        }
        for (let key in str1FrequencyCounter) {
            if (!(key in str2FrequencyCounter)) {
                return false;
            }
            if (str1FrequencyCounter[key] !== str2FrequencyCounter[key]) {
                return false;
            }
        }
        
        return true;
    }
}

var time1 = performance.now();

validAnagram('study', 'dusty');
validAnagram('hello', 'bye');
validAnagram('trifluorochloromethane', 'chlorotrifluoromethane');

var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);


