let array = ['flower','flaowght','flqlow']
let smallest_len = Infinity
for(let i of array){
    if(i.length < smallest_len){
        smallest_len = i.length
    }
}
let result = ''
for(let i=0;i<smallest_len;i++){
    let prifix = ''
    const set = new Set()
    for(let word of array){
        prifix = word.slice(0,i+1)
        set.add(prifix)
    }
    if(set.size === 1){
        result = prifix
    }
    
}
console.log(result)