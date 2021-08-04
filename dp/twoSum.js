const twoSum = (nums, target, start = 1, result = []) => {
    let a = nums[start-1];
    for (let i = start; i < nums.length; i++) {
        let diff = target - nums[i];
        console.log(" nums[" + i + "]:" + nums[i] + " diff :" + diff + " target :" + target);
        if (diff === 0) result.push(i);
        else if (diff > 0) return twoSum(nums, diff, start + 1, result);
    }
    return result;
};

// const twoSumBottomUp = (nums, target, result=[]) => {
//     let a = nums[0];
//     if((a -target) === 0) return
//     for (let i = 1; i< nums.length; i++){
//         let diff = target- nums[i];
//         console.log("diff :"+diff + " target :"+ target + " nums[" + i + "]:"+nums[i]);
//         if(diff === 0) result.push(i);
//         else if(diff > 0) return twoSum(nums, diff, result);
//     }
//     return result;
// };

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));