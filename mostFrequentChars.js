let text = "abkdablkjsablisababaaaaaa";
let dict = {}
for(let j of text){
    if(dict[j]===undefined){
        dict[j] = 1
    }else{
        dict[j] = dict[j]+1
    }
}
let maxCount = 0
let resultString = ''
let keys = Object.keys(dict)
let values = Object.values(dict)
let max_values = Math.max(...values)
let index = values.indexOf(max_values)
console.log(keys[index])
// for(let [keys, values] of Object.entries(dict)){
//     if(values>maxCount){
//         maxCount = values 
//         resultString = keys
//     }
// }
