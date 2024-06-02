function combinationSum(candidates, target) {
    const result = [];
    function backtrack(remaining, start, path) {
        if (remaining < 0) return;
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]); 
            backtrack(remaining - candidates[i], i, path); 
            path.pop(); 
        }
    }

    backtrack(target, 0, []);
    return result;
}
const array = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(array, target)); 
