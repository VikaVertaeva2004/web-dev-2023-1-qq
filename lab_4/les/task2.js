'use strict';

const countNumber = (array) => {
    let result = {}
    for (let i = 0; i< array.length; i++) {
            if (!(array[i] in result)) result[array[i]] = 1;
            else result[array[i]]++
    }
    for (let key in result)  if (result[key]==1) delete result[key];
    return result;
};
console.log(countNumber([11,23,11,42,55,42,42,55]));