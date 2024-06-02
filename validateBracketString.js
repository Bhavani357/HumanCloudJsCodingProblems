const string = "({}[])"

let result = true
for(let i=0;i<string.length-1;i++){
    if(string[i]==="("){
        if(string[i+1]===")"){

            continue
        }else{
            result = false
            break
        }
    }else if(string[i]==="{"){
        if(string[i+1]==="}"){

            continue
        }else{
            result = false
            break
        }
    }else if(string[i]==="["){
        if(string[i+1]==="]"){

            continue
        }else{
            result = false
            break
        }
    }
}
console.log(result)