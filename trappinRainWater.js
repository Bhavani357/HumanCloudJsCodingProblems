const array = [0,1,0,2,1,0,1,3,2,1,2,1]

let count = 0
for(let i=0;i<array.length-1;i++){ //O(n)
    if(array[i]>array[i+1]){
        count += 1
    }
}
console.log(count) // 6