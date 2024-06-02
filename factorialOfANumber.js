function findFactorial(n){
    if(n<=1){
        return 1
    }

    return n*findFactorial(n-1)
}

let num = 5
const factorial = findFactorial(num)
console.log(factorial)//120