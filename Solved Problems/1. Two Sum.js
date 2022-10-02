// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    for (let i=0;i<nums.length;i++) {
        for (let j=0;j<nums.length;j++) {
            if (nums[i] + nums[j] == target && i != j) return [i, j]
        }
    }
}


// Tests
// (nums, target)
// [2,7,11,15], 9
// [3,2,4], 6
// [3,3], 6
console.log(twoSum([3,3], 6))