function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let count = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            count++;
            [arr[count], arr[i]] = [arr[i], arr[count]]
            console.log("pass", arr)
        }
    }
    [arr[start], arr[count]] = [arr[count], arr[start]]
    return count
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //   left side of the array
        quickSort(arr, left, pivotIndex - 1)
        //   right side of the array
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 10, 0]))
