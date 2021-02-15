/*
Write a recursive function called flatten which acceprs an array of arrays and returns
a new array with all values flattened.
*/


function flatten(a) {
    // add whatever parameters you deem necessary - good luck!
    if (a.length === 0) return [];
    let nestedArr = Array.isArray(a[0]) ? flatten(a[0]) : [a[0]]
    return nestedArr.concat(flatten(a.slice(1)))
}

  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]