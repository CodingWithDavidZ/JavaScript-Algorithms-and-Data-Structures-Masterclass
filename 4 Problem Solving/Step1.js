// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem
// 4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem
// 5. How should I label the important pieces of data that are a part of the problem?

//example problem:
//Write a Function that takes two Numbers and Returns their Sum

//restate the problem:
//implement addition function

//Inputs:
//likely two integers or floating point numbers, what if number is very large, or a string?

//Outputs:
//can be derived from inputs as long as inputs are valid

//Labeling
//input1: num1
//input2: num2
//output: sum
//function: add2Nums

function add2Nums(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log(add2Nums(1, 2));
