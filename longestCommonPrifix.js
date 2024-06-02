let array = ['flower','flow','fght']
let smallest_len = Infinity
for(let i of array){
    if(i.length < smallest_len){
        smallest_len = i.length
    }
}
let prifix;
let n = 0;
for(let j=0;j<smallest_len;j++){
    if(n===0){
        prifix = array[0].slice(0,j+1)
        for(let word of array){
            let word_prifix = word.slice(0,j+1)
            if(prifix !== word_prifix){
                prifix = prifix.slice(0,prifix.length-1)
                n+=1
            }
        }
    }
}
console.log(prifix)