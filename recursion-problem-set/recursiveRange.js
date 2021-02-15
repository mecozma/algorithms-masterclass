/*
Write a function called recursiveRange which accepts a number and adds up
all the numbers from 0 to the number passed to the function.
*/
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(arg) {
    if (arg === 0) {
        return arg
    }
    return arg + recursiveRange(arg - 1)
}
