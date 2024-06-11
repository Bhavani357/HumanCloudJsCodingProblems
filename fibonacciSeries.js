function formFibonacci(num){
    if(num<=1) return num
    return formFibonacci(num-1)+formFibonacci(num-2)
}
let sequence = 6
const result = []
for (let i=0;i<sequence;i++){
    let num = formFibonacci(i)
    result.push(num)
}
console.log(result)