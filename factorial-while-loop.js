
function factorial(number){
    var fact = 1; 
    while(number != 1){
        fact *= number;
        number--;

    }
    return fact;
}

console.log(factorial(6));