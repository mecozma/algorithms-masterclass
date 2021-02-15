/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arg) {
    if (arg.length === 0) {
        return 1
    }
    console.log(arg)
    return arg[0] * productOfArray(arg.slice(1))
}

console.log(productOfArray([1, 2, 3, 10, 1])) // 60