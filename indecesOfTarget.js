let array = [7,2,4,5,10,3,4,1]
let target = 9 
const indeces = []
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]+array[j] === target){
            indeces.push([i,j])
        }
    }
}
console.log(indeces) // [[0,1],[2,3],[3,6]]