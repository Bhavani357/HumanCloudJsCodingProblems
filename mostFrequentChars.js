let text = "abkdablkjsablisababaaaaaa";
let dict = {}
for(let j of text){
    let count = 0
    for(let k of text){
        if (j===k){
            count += 1
        }
    }
    dict[j] = count
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
