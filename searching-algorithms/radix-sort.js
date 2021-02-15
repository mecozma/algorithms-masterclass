function getDigit(number, reversedIndex) {
    //   get the digit at a speciffic index
    // let stringNumber = number + "";
    // if (stringNumber[stringNumber.length - (reversedIndex + 1)]) {
    //   return stringNumber[stringNumber.length - (reversedIndex + 1)]
    // } else {
    //   return 0
    // }
    return Math.floor(Math.abs(number) / Math.pow(10, reversedIndex)) % 10;
}

function digitCount(number) {
    //   count the number of the difits of a number
    if (number === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(number))) + 1;

}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(array) {
    //   find the number with the max digits
    let maxDigitCounts = mostDigits(array);
    for (let k = 0; k < maxDigitCounts; k++) {
        //     create the base 10 buckets-array of arrays- to store the numbers on each iteration
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < array.length; i++) {
            let digit = getDigit(array[i], k);
            digitBuckets[digit].push(array[i]);
        }
        //     concatente the buckets, using the spread operator, and assign them back to the array
        array = [].concat(...digitBuckets);
    }
    return array;
}
console.log(radixSort([12345, 1, 22, 333]))