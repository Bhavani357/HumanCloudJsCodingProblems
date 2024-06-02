const array = [1,2,3,4,5]
const target = 3
let first = 0
let last = array.length-1
let indexOfTarget
while(first<=last){
    let mid = Math.floor((first+last)/2)
    if(target === array[mid]){
        indexOfTarget= mid
        break
    }else if(target>mid){
        first = mid+1
    }else{
        last = mid-1
    }
}
console.log(indexOfTarget)