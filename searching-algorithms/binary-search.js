/**
 * Write a function called binarySearch which accepts a sorted array and a value
 * and returns the index at which the value exists. Otherwise returns -1.
 */

function binarySearch(arr, num) {

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (num !== arr[middle] && left <= right) {

        console.log(left, middle, right)
        if (arr[middle] < num) {
            left = middle + 1;
        } else {
            right = middle - 1
        }
        middle = Math.floor((left + right) / 2);
    }
    return num === arr[middle] ? middle : -1
}


console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40], 10));