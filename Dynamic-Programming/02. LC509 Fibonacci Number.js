//LC 509. Fibonacci Number


/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    return nthFib(n,{});
};

//DP approch
function nthFib(n,memo){
    if(n==0)
        return 0;
    if(n==1)
      return 1;
    
    var currentKey = n;
    
    if(memo[currentKey])
        return memo[currentKey];
    var a =nthFib(n-1, memo)
    var b =nthFib(n-2, memo)
    
    memo[currentKey] = a+b;
    return a+b;
}