/*
Write a function called sameFrequency. Given two arguments find out if the elements of the 
arguments have the same frequency.
*/
function sameFrequency() {
    // Capture the arguments passed to the function.
    let str = [...arguments];
    // Convert the arguments to string. In case the passed argumets are numbers.
    let arg1 = str[0].toString();
    let arg2 = str[1].toString();
    // Instantiate an object to count the frequency of the elements.
    let strObject = {};
    // Check if the passed arguments have the same length.
    if (str[0].length !== str[1].length) {
        return false;
    }
    // Iterate over the first argument and count the frequency of its elements.
    for (let char of arg1) {
        strObject[char] = (strObject[char] || 0) + 1;
    }
    // Iterate over the second argument and substract one from the count.
    for (let char of arg2) {
        // If the object contains the character of the secong argument and its count is bigger that 0 substract one.
        if (strObject.hasOwnProperty(char) && (strObject[char] >= 1)) {
            strObject[char] = strObject[char] - 1
        } else {
            // If the object doesn't contain the character return false.
            return false;
        }
    }
    return true;
}