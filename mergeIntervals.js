let intervals = [[1,3],[2,6],[8,10],[15,18]]
let newArray = []

function findIntervals(array1,array2){
    if(array1[0] <= array2[1] && array2[0] <= array1[1]){
        return [array1[0],array2[1]]
    }else{
        return array2
    }
}
for(let i=0;i<intervals.length-1;i++){
    let result = findIntervals(intervals[i],intervals[i+1])
    newArray.push(result)
}
console.log(newArray)