/*
Implement a function called areThereDuplicates which accepts a variable number of arguments,
ans checks weather there are any duplicates among the arguments passed in. You can solve
this using the frequency counter patter OR the multiple pointers patters.
*/
function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let passed = [...arguments];
    if (passed.length < 2) {
        return false;
    }
    let obj = {};
    for (var i = 0; i < passed.length; i++) {
        let element = passed[i];
        if (!obj[element]) {
            obj[element] = 1;
        } else {
            obj[element] += 1;
        }
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }
    return false;
}