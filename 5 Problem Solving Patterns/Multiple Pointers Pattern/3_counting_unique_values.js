// Implement a function, called, countUniqueValues, which accepts a sorted array and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr){
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    if (arr.length === 0) {
        return 0;
    }else{
    return i + 1;
    }
}

let array1 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
let array2 = [1,1,1,2,3,4,7,7,12,12,13];
countUniqueValues(array2);
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4