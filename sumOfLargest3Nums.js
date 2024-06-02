let arr = [0]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        let firstNum = arr[j]
        let secondNum = arr[j+1]
        if(firstNum>secondNum){
            arr[j] = secondNum
            arr[j+1] = firstNum
        }
    }
}
let sum = 0
let len = 0
if(arr.length<3){
    len = arr.length
}
for(let k=0;k<len;k++){
    sum += arr[arr.length-k-1]
}
console.log(sum)
