const string = 'bhavani'
let i =0
let j = string.length-1 
const length = Math.floor(string.length/2)
let result = true
for(let k=0;k<length;k++){
    if(string[i]!==string[j]){
        result = false
        break
    }else{
        i += 1
        j -= 1
    }
}
console.log(result)