let numsArray = [121,345,768,222] 

const checkIsPalindrome = (numsArray)=>{
    let palindromes = []
    for(let number of numsArray){
        const num = number
        let newNum = 0
        while(number>0){
            let lastDigit = number%10 
            newNum = newNum*10+lastDigit
            number = Math.floor(number/10)
        }
        if(newNum === num){
        palindromes.push(num)
    }
    }
    return palindromes
}
let palindromes = checkIsPalindrome(numsArray)
console.log(palindromes)