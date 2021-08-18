/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let i = 0; j = 0;
    let q = [];

    while (m > 0 && i < m) {
        if ((nums1[i] < nums2[j] && i < m) || j >= n) {
            q.push(nums1[i]);
            i++;
        }
        else {
            q.push(nums2[j]);
            j++;
        }
    }
    nums1 = q.length > 0 ? q : nums1;
    console.log("[" + nums1.join(",") + "]");
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 2, 4, 5, 6, 0], 5, [3], 1);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([2, 0], 1, [1], 1);