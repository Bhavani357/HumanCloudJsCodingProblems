let array1 = [2,4,8,9]
let array2 = [1,7,9,10]
array1.push(...array2)
for(let i=0;i<array1.length;i++){
    for(let j=0;j<array1.length-1;j++){
        let firstNum = array1[j]
        let secondNum = array1[j+1]
        if(firstNum>secondNum){
            array1[j] = secondNum
            array1[j+1] = firstNum
        }
    }
}
console.log(array1)