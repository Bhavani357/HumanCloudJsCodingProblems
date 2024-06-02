class NumeroName{
    constructor(string,reduction){
        this.string = string;
    }
    firstChar(){
        return this.string.charAt(0).toLowerCase()
    }
    lastChar(){
        return string.charAt(string.length-1)
    }
    distance(){
        return string.length-2 
    }
    numeroName(callNum){
        if(callNum>this.distance()){
            return this.firstChar()+String(0)+this.lastChar()
        }else{
            return this.firstChar()+String(this.distance()-callNum)+this.lastChar()
        }
        
    }
}
const string = "India"
const reduction = 1 
const result = new NumeroName(string,reduction)
console.log(result.numeroName(1))