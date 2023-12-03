// https://leetcode.com/problems/house-robber/

var rob = function(nums) {
    /*
    Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for House Robber.
    Memory Usage: 33.8 MB, less than 25.89% of JavaScript online submissions for House Robber.
    
    O(n) time, O(1) space
	
	- Bottom up strategy
	- Iterative
	- Memoization
	
	Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    */
    
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxAtTwoBefore = nums[0];
    let maxAtOneBefore = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
        
        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxAtCurrent;
    }
    
    return maxAtOneBefore;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/1735550/python-javascript-easy-solution-with-very-clear-explanation/

// https://leetcode.com/problems/climbing-stairs/