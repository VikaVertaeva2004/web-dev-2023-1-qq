"use strict";
function gsd (a,b)
{
    if (a>b) {temp =a;}
    else {temp = b;}
    for (let i = 1; i<temp+1; i++)
    {
        if (a%b==0 && b%i==0){
            res = i;
        }
     }
     return res;
}
let x = promt();
let n = promt();
alert ('нод ${x} и ${n} = ${gsd(x,n)}');