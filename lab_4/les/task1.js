'use strict';
function bubbleSort (array){
    let result = array;
    for (let j = result.length - 1; j>0; j--){
        for (let i = 0; i<j;i++){
            if (result[i]>result[j]){
                let temp = result[i];
                result[i] = result[i+1];
                result[i+1]= temp;
            }
        }
    }
    return result;
}
console.log(bubbleSort([1,6,7,457,3,0,8]))