//Solve or Simplify

//Example:
//Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
    // let lowercase = str
	//make object to return at end
    let result = {}
	//loop over string, for each character...
    for(var i = 0; i < str.length; i++){
        let char = str[i]
        // if char is a number/letter AND is a key in object, add one to count
        if(result[char]> 0){
            result[char]++;
        //if char is not a key in object AND is a number/letter, add it and set count to one.
        }else {
            result[char] = 1;
        }
    }
	//if char is something else (space, period, etc.) don't do anything
	//return object at end
    return result;
}

console.log(charCount("Hi there!"))
