function longestParentheses(string){
    let newArray = [-1]
    let maxLen = 0
    for(let i=0;i<string.length;i++){
        if(string[i]==='('){
            newArray.push(i)
        }
        else{
            let top = newArray.pop()
            if(newArray.length !==0){
                maxLen = Math.max(maxLen, i-newArray[newArray.length-1])
            }
        }
    }
    return maxLen
}
let string = "(())()"
let result = longestParentheses(string)
console.log(result)