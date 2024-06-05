let string = "(()())"
let count = 0
for(let i=0;i<string.length-1;i++){
    if(string[i]==="("){
        if(string[i+1]===")"){
            count += 2
        }
    }
}
console.log(count) // 2
// or 
let counting = 0
for(let i=0;i<string.length-1;i++){
    if(string[i]==="("){
        if(string.includes(")")){
            counting += 1
        }
    }
}
console.log(counting) //2