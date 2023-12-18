"use strict"
function minDigit(x)
{
    m=a%10;
    a=a/10;
    while (a>0)
    {
       if(a%10 >m) 
       {
        m=a%10;
       }       
        a=a/10
    }
    return m
}
let x = promt();
alerd ('${minDigit(x)}')