/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    let cache = [];
    for(let i in nums){
        let diff = target- nums[i];
        if(cache[diff]) return [cache[diff], i];
        cache[nums[i]] = i;
    }
    return cache;
};