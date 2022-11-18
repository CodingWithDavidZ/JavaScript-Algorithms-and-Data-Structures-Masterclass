// Refactored solution using multiple pointers

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
            // if the sum is greater than 0, decrement the right pointer
        } else if(sum > 0){
            right--;
            // if the sum is less than 0, increment the left pointer
        } else {
            left++;
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);