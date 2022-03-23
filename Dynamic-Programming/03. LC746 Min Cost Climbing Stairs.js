//746. Min Cost Climbing Stairs

/**
 * @param {number[]} cost
 * @return {number}
 */

 var minCostClimbingStairs = function(cost) {
    var memo={};
    // return Math.min(minCost(cost, 0, memo), minCost(cost, 1, memo))
    //since cost to reach from 1 to 3 is a sub-poblem of minCost(cost,0,memo)
    //We can get it from the object
    return Math.min(minCost(cost, 0, memo),memo[1])
}

//DP Memorization approch
function minCost(cost, currentIndex, memo){
    if(currentIndex == cost.length)
        return 0;
    if(currentIndex > cost.length)
        return 1001
    
    var currentKey = currentIndex;
    
    //currentIndex is changing every time, so take that as currentKey
    if(memo[currentKey])
        return memo[currentKey];
    
    var oneJump = cost[currentIndex] + minCost(cost, currentIndex+1, memo);
    var twoJump = cost[currentIndex] + minCost(cost, currentIndex+2, memo);
    
    memo[currentKey] = Math.min(oneJump, twoJump)
    
    return  memo[currentKey] ;
    
}