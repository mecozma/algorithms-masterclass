/*
Write a function called nestedEvenSum. Return the sum of all even numbers
in an object which may contain nested objects.
*/

function nestedEvenSum(obj) {
    let result = 0;

    function helper(obj) {
        for (let i in obj) {
            if (typeof obj[i] === 'number' && obj[i] % 2 === 0) {
                result += obj[i]
            }
            else if (typeof obj[i] === "object") {
                helper(obj[i])
            }
        }
    }
    helper(obj)
    return result
}
