const n = 5;

function findingNoOfWays(n){
    if (n <= 1) return 1; // if n=0 standing on a ground do nothing one way, n=1 to reach the first step on.of ways are only one
    let ways = new Array(n + 1).fill(0); // to reach n th step, from 0 to n 
    ways[0] = 1;
    ways[1] = 1; 
    for (let i = 2; i <= n; i++) { // to reach the 2nd step no.of ways are 1+1 or 2 so, two ways to reach 2nd step ...so on
        ways[i] = ways[i - 1] + ways[i - 2]; // to reach 2nd , privous and before previous
    }
    return ways[n]; // to reach nth step
}
let result = findingNoOfWays(n)
console.log(result)