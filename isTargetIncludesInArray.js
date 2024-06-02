let twoDArray = [[2,3,6,7],[9,10,11,23],[0,2,6,8,12]]
let target = 9
let count = 0
for(let array of twoDArray){
    if(array.includes(target)) count += 1
}
if(count>0) console.log(true)
else console.log(false)

// or 
let result = twoDArray.some((eachArray)=>eachArray.includes(target))
console.log(result)