
const array = [2, 3, 6, 7,8];
const target = 8;
let count =1
let newArray = []
for(let i=0;i<array.length+1;i++){
    for(let j=0;j<target;j++){
        if((array[i]*count)<=target){
            newArray.push(array[i])
            count += 1
        }else{
            count = 1
            break
        }
    }
}
console.log(newArray)
let output = []
let length = newArray.length
for(let i=0;i<length;i++){
    for(let j=1;j<length;j++){
        let combination = newArray.slice(i,j+1)
        let sum = combination.reduce((acc,curr)=>acc+curr,0)
        if(sum === target){
            output.push(combination)
        }
    }
    
}
console.log(output)