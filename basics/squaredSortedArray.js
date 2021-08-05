var sortedSquares = function (nums) {
    let left = 0, right = nums.length - 1;
    let sorted = [];
    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            sorted[right - left] = nums[right] * nums[right];
            right--;
        } else {
            sorted[right - left] = nums[left] * nums[left];
            left++;
        }
    }
    return sorted;
};

let seq1 = sortedSquares([-4, -1, 0, 3, 10]);
let seq2 = [0, 1, 9, 16, 100];
console.log(seq1.length === seq2.length && seq2.every((v, i) => v === seq1[i]));

seq1 = sortedSquares([-7,-3,2,3,11]);
seq2 = [4,9,9,49,121];
console.log(seq1.length === seq2.length && seq2.every((v, i) => v === seq1[i]));