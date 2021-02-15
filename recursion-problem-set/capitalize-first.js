/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalise
the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
    let capitalised = [];
    if (arr.length === 0) return arr;
    let capital = arr[0][0].toUpperCase();
    let word = capital + arr[0].slice(1);
    capitalised.push(word);
    return capitalised.concat(capitalizeFirst(arr.slice(1)))
}