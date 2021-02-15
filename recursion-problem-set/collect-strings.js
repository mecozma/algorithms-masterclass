/*
Write a function called collectStrings which accepts an object and returns
an array of all the values in the object that have a typeof string.
*/

function collectStrings(obj) {
    let strings = [];

    for (let i in obj) {
        if (typeof obj[i] === 'string') {
            strings.push(obj[i]);
        }
        if (typeof obj[i] !== 'string') {
            strings = strings.concat(collectStrings(obj[i]));
        }
    }
    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])