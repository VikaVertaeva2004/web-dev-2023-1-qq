'use strict'

function maxOfMin (matrix){
    let maximum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < matrix.length; i++) {
        let minimum = matrix[i][0];
        for (let j = 1; j < matrix[i].length; j++)  if (matrix[i][j] < minimum) minimum = matrix[i][j]
        if (!maximum || minimum > maximum) maximum = minimum;
        return maximum;
    }
}

let matrix = [
    [3,5,6],
    [9,56,-19],
    [0,7,300]
]
console.log(maxOfMin(matrix))