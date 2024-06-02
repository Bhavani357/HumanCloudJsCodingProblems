const array = [0, 1, 3,4, 5, 9, 4, 0, 2, 3,3, 4, 0]
let max_count = 0
let result = 0

for(let i=0; i < array.length; i++){
    if(array[i] !== 0 && array[i+1] !== 0){
        max_count += 1
        if (max_count > result){
            result = max_count
        }
    }else{
        max_count = 0
    }
}
if(array[array.length-1] === 0){
    result += 1
}
console.log(result)