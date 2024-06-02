function stringToInteger(str) {
    str = str.trim();
    if (str.length === 0) return NaN; 
    let isNegative = false;
    let index = 0;
    let result = 0;
    if (str[index] === '-') {
        isNegative = true;
        index++;
    } else if (str[index] === '+') {
        index++;
    }
    while (index < str.length) {
        const char = str.charCodeAt(index);
        if (char < 48 || char > 57) { 
            break; 
        }
        result = result * 10 + (char - 48); 
        index++;
    }
    return isNegative ? -result : result;
}
const str1 = "123";
console.log(stringToInteger(str1)); 