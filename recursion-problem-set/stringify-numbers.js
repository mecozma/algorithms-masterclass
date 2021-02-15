/*
Write a function called stringifyNumbers which takes in an object and finds all of the values
which are numbers and converts them to strings.
*/
function stringifyNumbers(obj) {
    let newObj = {};
    for (let i in obj) {
        if (typeof obj[i] === 'number') {
            newObj[i] = obj[i] + "";
        } else if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
            newObj[i] = stringifyNumbers(obj[i]);
        } else {
            newObj[i] = obj[i];
        }
    }
    return newObj;
}

let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj1))