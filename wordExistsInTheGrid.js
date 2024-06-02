const twoDArray = [['A','C','E','F'],['D','S','B','K'],['P','Q','T','U']] 
const targetWord = 'ABCED'

const newArray = []
for(let array of twoDArray){
    newArray.push(...array)
}
let result = true
for(let letter of targetWord){
    if(newArray.includes(letter)){
        let index = newArray.indexOf(letter)
        newArray.pop(index)
    }else{
        result = false
    }
}
console.log(result)