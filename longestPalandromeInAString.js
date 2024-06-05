let string = 'aabcdaca'; // O(1)
let dict = {} // O(1)
for(let j of string){   // O(n)
    if(dict[j]===undefined) dict[j] = 1
    else dict[j] = dict[j]+1
}
console.log(dict)
let len = 0
let oddGrOne = 0
for(let [key,value] of Object.entries(dict)){  // O(n)
    if(value%2 ===0){
        len += value
    }else if(value%2 !==0){
        if(oddGrOne !== 1){
            len += value 
            oddGrOne = 1
        }else len += value -1
    }
}
console.log(len) // O(1) 

// total O(n) time complexity