console.log("-------Recurrsion Function----------")
function factorial(n){
    if(n == 0)
    return 1;
    else{
        console.log(n)
        return n * factorial(n -1);
    }
}

let number = 5
console.log("Factorial of " +number + ": "+factorial(number));

