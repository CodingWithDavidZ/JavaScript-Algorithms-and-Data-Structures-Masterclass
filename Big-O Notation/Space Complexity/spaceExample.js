function sum(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
// O(1) because we only have 2 two variables as denoted by the "=" sign

function double(arr){
    for(let i = 0; i < arr.length; i++){
        newArr.push(2*arr[i]);
    }
    return newArr
}
// O(n) because we are creating a new array that grows proportionally to the original array