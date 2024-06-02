const map={'a':3,'b':1,'c':2}
let values = Object.values(map).sort()
let result = {}
for(let i of values){
    for(let [key,value] of Object.entries(map)){
        if(i===value){
            result[key] = value
        }
    }
}
console.log(result)