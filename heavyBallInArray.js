let array = [1,1,1,2,1,1,1]

// let max = Math.max(...array)
// let maxNumIndex = array.indexOf(max)
// console.log(maxNumIndex)
// console.log(max)
let count = 0
for(let i=1;i<array.length;i++){
    if(array[i-1]===array[i]){
        count += 1
    }
    else{
        break
    }
}
console.log(count)