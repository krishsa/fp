var missingNumber = function(nums) {
    let total = (nums.length * (nums.length +1)) / 2;
    let sum = 0;
    for(let i=0; i< nums.length; i++) sum +=nums[i];
    return total-sum;
};

console.log(missingNumber([3,0,1]) == 2);
console.log(missingNumber([0,1]) == 2);
console.log(missingNumber([9,6,4,2,3,5,7,0,1]) == 8);