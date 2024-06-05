const str = '234'
let result = 0
for(let i in str){
    let unicode = str.charCodeAt(i)
    // console.log(unicode-48)
    result = result * 10 + (unicode-48)
}
console.log(`Type of input: ${typeof result}`)