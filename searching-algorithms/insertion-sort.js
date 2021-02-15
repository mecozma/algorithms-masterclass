let a = [98, 45, 5, 9, 8];

function insertionSort(arg) {
    let currentVal
    for (let i = 1; i < arg.length; i++) {
        currentVal = arg[i]
        for (var j = i - 1; j >= 0 && arg[j] > currentVal; j--) {
            arg[j + 1] = arg[j];
        }
        arg[j + 1] = currentVal
    }
    return arg
}

console.log(insertionSort(a));