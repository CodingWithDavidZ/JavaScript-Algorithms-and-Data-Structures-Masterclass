// Break it down
//	Explicitly write out the steps you need to take
//		 ○ Forces you to think about the code you'll write before you write it, 
//         and helps you catch any lingering conceptual issues or misunderstandings
//         before you dive in and have to worry about details as well.

//Example:
//Write a function which takes in a string and returns counts of each character in the string


function charCount(str){
    //do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the count for those characters
}


function charCount(str) {
	//make object to return at end
    //loop over string, for each character...
        // if char is a number/letter AND is a key in object, add one to count
        //if char is not a key in object AND is a number/letter, add it and set count to one.
        //if char is something else (space, period, etc.) don't do anything
    //return object at end
}

charCount("Your PIN is 1234!")