let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

console.log("Object.Keys", Object.keys(instructor));
console.log("Object.values", Object.values(instructor));
console.log("Object.entries", Object.entries(instructor));
//The above are all Linear Time or O(n)

console.log("instructor.hasOwnProperty('firstName')", instructor.hasOwnProperty('firstName'));
//This is Constant Time or O(1)





//test









