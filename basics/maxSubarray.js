// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

 var maxSubArray = function(nums) {
    
    let max = nums[0];
    let current  = nums[0];
    for(let i=1; i< nums.length;i++){
        if(nums[i] > current + nums[i]){
            current = nums[i]; // reset to current and discard old values in current
        }else{
            current += nums[i]; // i - value-added to subarray
        }
        if(current > max){ // question - keep track of max
            max = current;
        }
    }
    console.log("max :"+max);
    return max;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);