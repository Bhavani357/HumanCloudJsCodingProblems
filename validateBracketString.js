
function checkIsValid(string){
    const obj = {
        '(':')',
        '[':']',
        '{':'}'
    }
    const newArray = []
    for(let i=0;i<string.length;i++){
        const charector = string[i]
        if(obj[charector]){
            newArray.push(charector)
        }else{
            let top= newArray.pop()
            if(obj[top] !== charector){
                return false
            }
        }
    }
    return newArray.length === 0;
}
const string = "({}[])"
const result = checkIsValid(string)
console.log(result)