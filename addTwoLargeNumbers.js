let number1 = '123456789123456789'
let length = number1.length
let number2 = '987654321987654321'
let carry = 0
let sum = ''
for(let i=0;i<length;i++){ 
    let sumNum = Number(number1.charAt(length-i-1)) + Number(number2.charAt(length-i-1))+carry
    let lastDigit = sumNum%10
    carry = Math.floor(sumNum/10)   
    sum = String(lastDigit) + sum
}
console.log(sum)
