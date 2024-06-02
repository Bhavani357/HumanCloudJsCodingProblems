const array = [2,3,2,4,2,5,4,7,7,3]

const dups = []
const uniques = []
for(let i of array){
    if(uniques.includes(i)){
        dups.push(i)
    }else{
        uniques.push(i)
    }
}
console.log(uniques) //[2,3,4,5,7]
console.log(dups) // [2,2,4,7,3]