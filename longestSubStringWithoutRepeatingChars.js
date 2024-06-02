const string = "abcdabcdbb" 
let maxSubArrayCount = 0 
for(let i=0;i<string.length;i++){
    for(let j=i+1;j<string.length;j++){
        let subString = string.slice(i,j+1)
        let setSubString = new Set(subString)
        if(subString.length === setSubString.size){
            if(maxSubArrayCount < setSubString.size){
                maxSubArrayCount = setSubString.size
            }
        }
    }
}
console.log(maxSubArrayCount)