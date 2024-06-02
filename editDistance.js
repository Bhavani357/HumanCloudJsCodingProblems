const word1 = 'horse'
const word2 = 'ros'
let newWord1 = ''
let count = 0
for(let letter of word1){
    if(!word2.includes(letter)){
        count += 1
    }else{
        newWord1 += letter
    }
}
console.log(newWord1)
console.log(count)
