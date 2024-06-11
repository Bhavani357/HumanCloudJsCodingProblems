
function findHeavyBall(array){
    let group1 = array.slice(0,3)
    let group2 = array.slice(3,6)
    let group3 = array.slice(6,8)
    console.log(group1,group2,group3)
    function findSum(data){
        return data.reduce((acc,curr)=>acc+curr,0)
    }
    let sumOfGroups = findSum(group1)
    console.log(sumOfGroups)
}

let array = [1,1,1,2,1,1,1]
let result = findHeavyBall(array)

