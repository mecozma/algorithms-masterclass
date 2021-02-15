function mergeSort(array_a, array_b) {
    let joinedArray = [];
    let value_a = 0;
    let value_b = 0;
    while (value_a < array_a.length && value_b < array_b.length) {
        if (array_a[value_a] < array_b[value_b]) {
            joinedArray.push(array_a[value_a])
            value_a++;
        } else {
            joinedArray.push(array_b[value_b])
            value_b++;
        }
    }
    console.log(joinedArray)
    //   The while loops pushes to the joinedArray the last elements from the longer array
    while (value_a < array_a.length) {
        joinedArray.push(array_a[value_a])
        value_a++;
    }
    while (value_b < array_b.length) {
        joinedArray.push(array_b[value_b])
        value_b++;
    }
    return joinedArray;
}

console.log(mergeSort([1, 3, 5, 7, 99, 100, 101], [2, 4, 6, 8, 9, 10, 51]))