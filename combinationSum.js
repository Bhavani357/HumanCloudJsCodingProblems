
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
for(let i=0;i<newArray.length;i++){
    let subArrays = newArray.slice(0,i+1)
    // console.log(subArrays)
    for(let j=0;j<subArrays.length;j++){
        let allPossibles = subArrays.slice(j,subArrays.length)
        let sum = allPossibles.reduce((acc,curr)=>acc+curr,0)
        if(sum === target){
            output.push(allPossibles)
        }
    } 
}

console.log(output)