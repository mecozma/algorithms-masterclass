/**
 * Count the number of times a word is repeated in a string.
 */
let string = 'Do not use your computer while in work';
let sector = "use";
function stringSearch(param1, param2) {
    let count = 0;
    for (let i = 0; i < param1.length; i++) {
        for (let j = 0; j < param2.length; j++) {
            if (param2[j] !== param1[i + j]) {
                break;
            }
            if (j === param2.length - 1) {
                count++;
            }
        }
    }
    return count;
}
console.log(stringSearch(string, sector));