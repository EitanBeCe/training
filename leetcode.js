// neetcode.io



// 4
// https://leetcode.com/problems/move-zeroes/description/
// const nums = [0,1,0,3,12]
// var moveZeroes = function(nums) {
// // var moveZeroes = function(nums: number[]) {

//     // 2 changing arr itself
//     let size = nums.length;

//     for (let i = 0; i < size; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//             i--;
//             size--;
//         }
//     }

//     return nums
    
//     // 1 with returning in filter
//     let countZeros = 0

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             countZeros++
//         }
        
//     }

//     nums = nums.filter(num => num != 0)

//     for (let i = 0; i < countZeros; i++) {
//         nums.push(0)
//     }

//     console.log(nums);
// };
// moveZeroes(nums)

// 3
// https://leetcode.com/problems/maximum-subarray/description/
// var maxSubArray = function(nums) {
//     let maxSum = nums[0];  

//     for (let i = 1; i < nums.length; i++) {
//         nums[i] = Math.max(0, nums[i - 1]) + nums[i];

//         if (nums[i] > maxSum)
//             maxSum = nums[i];

//         console.log(nums);
//     }
//     return maxSum;
// };
// console.log(maxSubArray([2,20,-10,5,6]));
// maxSubArray([2,3,4,5,6])

// 2
// https://leetcode.com/problems/two-sum/description/
// const nums = [3,2,4], target = 6

// var twoSum = function(nums: number[], target: number) {
//     const map = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]
        
//         if (map.has(complement))
//             return [map.get(complement), i]

//         map.set(nums[i], i)
//     }
//     return []
// };

// twoSum(nums, target)



// 1
// https://leetcode.com/problems/contains-duplicate/
/**
 * param {number[]} nums
 * return {boolean}
 */
// var containsDuplicate = function(nums) {
//     // let hasMatch = false
//     // let index = 0
//     // let numsArr = []

//     // nums.forEach(num => {
//     //     numsArr = nums.slice(1)

//     //     if (num === nums[index]) {
//     //         hasMatch = true
//     //     }

//     //     index++

//     //     console.log(hasMatch);
//     // });
// };

// containsDuplicate([1,2,3,1])