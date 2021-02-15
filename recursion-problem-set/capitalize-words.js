/*
Write a function called capitalizeWords. Given an array of words,
return a new array containing each word capitalized.
*/
function capitalizeWords(arg) {

    let result = [];
    if (arg.length === 0) return result;

    result.push(arg[0].toUpperCase());

    return result.concat(capitalizeWords(arg.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));